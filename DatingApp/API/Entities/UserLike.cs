namespace API.Entities
{
    public class UserLike
    {
        public AppUser SourceUser { get; set; } //the user that is liking the liked user
        public int SourceUserId { get; set; }
        
        public AppUser LikedUser { get; set; } //the user that is being liked
        public int LikedUserId { get; set; }
    }
}