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

        public string CurrentUsername { get; set; }
        public string Gender { get; set; }

        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 150;
        
        public string OrderBy { get; set; } = "lastActive";
        
        

    }
}