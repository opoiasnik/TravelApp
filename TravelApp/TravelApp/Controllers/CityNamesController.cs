using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Produces("application/json")]
[ApiController]
[Route("api/CityNames")]
public class CityNamesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CityNamesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CityNames>>> GetCityNames()
    {
        var cities = await _context.CityNames.ToListAsync();
        Console.WriteLine($"Cities count: {cities.Count}"); // Временный лог для отладки

        if (cities == null || !cities.Any())
        {
            return NotFound();
        }

        return Ok(cities);
    }

}
