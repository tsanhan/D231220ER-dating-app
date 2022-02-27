using System;
namespace API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 50;
        
        public int PageNumber {get; set;}

        private int _pageSize = 10;
        public int PageSize
        {
            get => _pageSize; // getter
            set => _pageSize = Math.Min(MaxPageSize, value); // setter
        }
         
    }
}