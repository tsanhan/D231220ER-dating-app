using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class LikesRepository : ILikesRepository
    {
        private readonly DataContext _context;
        public LikesRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<UserLike> GetUserLike(int sourceUserId, int likedUserId)
        {
            return await _context.Likes.FindAsync(likedUserId, sourceUserId);
        }

        public async Task<PagedList<LikeDto>> GetUserLikes(LikesParams likeParams)
        {
            // 'liked' => "which users this user has liked" => userId is the source user
            // 'liked by' => "which users have  liked  this user" => userId  is the liked user

            IQueryable<AppUser> users;
            var likes  = _context.Likes.AsQueryable();

            if(likeParams.Predicate == "liked") {
                likes = likes.Where(like => like.SourceUserId == likeParams.UserId);
                users = likes.Select(like => like.LikedUser);
            }
            else {
                likes = likes.Where(like => like.LikedUserId == likeParams.UserId);
                users = likes.Select(like => like.SourceUser);
            }

            var likedUsers = users.Select(user => new LikeDto {
                Age = user.DateOfBirth.CalculateAge(),
                City = user.City,
                Country = user.Country,
                Id = user.Id,
                KnownAs = user.KnownAs,
                PhotoUrl = user.Photos.FirstOrDefault(p => p.IsMain).Url,
                Username = user.UserName
            });

            return await PagedList<LikeDto>.CreateAsync(likedUsers,likeParams.PageNumber, likeParams.PageSize);
        }

        public async Task<AppUser> GetUserWithLikes(int userId)
        {
            return await _context.Users
            .Include(u => u.LikedUsers)
            .FirstOrDefaultAsync(u => u.Id == userId);
        }
    }
}