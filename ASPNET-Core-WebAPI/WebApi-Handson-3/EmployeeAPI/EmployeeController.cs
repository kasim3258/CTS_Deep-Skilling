using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/[controller]")]
[CustomAuthFilter]
public class EmployeeController : ControllerBase
{
 [AllowAnonymous]
[HttpGet]
[ProducesResponseType(StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public ActionResult<List<Employee>> Get()
{
    throw new Exception("Custom Exception Occurred");
}
    [HttpPost]
    public IActionResult Post([FromBody] Employee employee)
    {
        return Ok(employee);
    }

    private List<Employee> GetStandardEmployeeList()
    {
        return new List<Employee>()
        {
            new Employee
            {
                Id = 1,
                Name = "John",
                Salary = 50000,
                Permanent = true,
                Department = new Department
                {
                    Id = 1,
                    Name = "IT"
                },
                Skills = new List<Skill>
                {
                    new Skill
                    {
                        Id = 1,
                        Name = "C#"
                    }
                },
                DateOfBirth = new DateTime(2000,1,1)
            }
        };
    }
}