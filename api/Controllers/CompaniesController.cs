using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class CompaniesController : ControllerBase
{
    List<Company> companyList = new List<Company>();

    [HttpGet]
    public ActionResult<IEnumerable<Company>> Get()
    {
        for (var i = 0; i < 100; i++)
        {
            var company = new Company();
            company.Id = Faker.RandomNumber.Next(0, 100);
            company.meetingDate = new DateTime(2022, 5, 5);
            company.companyNames = Faker.Company.Name();
            company.gender = Faker.Country.Name();
            company.names = Faker.Name.FullName(Faker.NameFormats.WithPrefix);
            company.gender = i < 50 ? "male" : "female";
            companyList.Add(company);
        }


        return Ok(companyList);
    }


}

