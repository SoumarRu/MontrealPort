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
    public class LoginController : ControllerBase
    {
        private readonly ShipAppContext _context;
        private readonly IDataRepository<User> _repo;

        public LoginController(ShipAppContext context, IDataRepository<User> repo)
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
        public IActionResult ConnectUser(User user)
        {
            try
            {
                // a ajouter plus tard, une fonction qui compare le hash du mot de passe avec celui dans la bd
                if (!UserExists(user.Email, user.UserName))
                {
                    throw new Exception("Utilisateur n'existe pas !");
                }

                // Autres validations seront ajoutées plus tard
            }
            catch (Exception e)
            {
                Console.Write(e.Message);
            }

            return AcceptedAtAction("GetUser", new { id = user.Id }, user);
        }

        private bool UserExists(string email, string userName)
        {
            return _context.User.Any(e => e.Email == email || e.UserName == userName);
        }
    }
}