using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<CityNames> CityNames { get; set; }
}

public class CityNames
{
    public int ID { get; set; }
    public string? City { get; set; }
}
