using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8 , MinimumLength = 4 , ErrorMessage ="The Password must 4-8 Length ")]
        public string Password { get; set; }
        
        
    }
}