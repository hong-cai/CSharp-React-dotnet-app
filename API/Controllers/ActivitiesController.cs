using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
	public class ActivitiesController : BaseApiController
	{
		private readonly DataContext _context;
		public ActivitiesController(DataContext context)
		{
			this._context = context;
			System.Console.WriteLine("_context: {0}",_context.Activities);
		}

	[HttpGet]
	public async Task<ActionResult<List<Activity>>> GetActivities(){
		return await _context.Activities.ToListAsync();
	}
		[HttpGet("{id}")]
	public async Task<ActionResult<Activity>> GetActivity(Guid id){
		//need error handlin here
		return await _context.Activities.FindAsync(id);
	}
}
	}



	