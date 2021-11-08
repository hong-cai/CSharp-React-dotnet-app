
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
	public class DataContext : DbContext
	{
		public DataContext( DbContextOptions options) : base(options)
		{
		}
	// Represent a table in the database
		public DbSet<Activity> Activities{get;set;}
	}
}