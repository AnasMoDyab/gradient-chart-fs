using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class IndividualsController : ControllerBase
{
    List<Users> usersList = new List<Users>();

    [HttpGet]
    public ActionResult GetItems()
    {
        for (var i = 0; i < 100; i++)
        {
            var user = new Users();
            user.Id = Faker.RandomNumber.Next(0, 100);
            user.Name = Faker.Name.FullName(Faker.NameFormats.WithPrefix);
            user.surName = Faker.Name.FullName(Faker.NameFormats.WithPrefix);
            usersList.Add(user);
        }


        return Ok(usersList);
    }


}

