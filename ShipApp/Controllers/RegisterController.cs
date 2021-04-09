using Microsoft.AspNetCore.Mvc;
using ShipApp.Data;
using ShipApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly ShipAppContext _context;
        private readonly IDataRepository<User> _repo;

        public RegisterController(ShipAppContext context, IDataRepository<User> repo)
        {
            _context = context;
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<User> GetUser()
        {
            return _context.User;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user)
        {
            try
            {
                if (UserExists(user.Email, user.UserName))
                {
                    throw new Exception("Utilisateur existe");
                }

                // Autres validations seront ajoutées plus tard

                _repo.Add(user);
                var save = await _repo.SaveAsync(user);
            }
            catch (Exception e)
            {
                Console.Write(e.Message);
            }

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        private bool UserExists(string email, string userName)
        {
            return _context.User.Any(e => e.Email == email || e.UserName == userName);
        }
    }
}