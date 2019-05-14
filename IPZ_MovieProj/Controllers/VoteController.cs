﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.Interfaces;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace IPZ_MovieProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : ControllerBase
    {
        private readonly IVoteService _voteService;

        public VoteController(IVoteService voteService)
        {
            _voteService = voteService ?? throw new ArgumentNullException(nameof(voteService));
        }
        [HttpGet("votes")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Vote>> GetById(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var vote = await _voteService.GetByIdAsync(id);

            if (vote == null)
            {
                return NotFound();
            }

            return Ok(vote);
        }
        [HttpPost()]
        public async Task<ActionResult<Vote>> Create([FromBody][Required]Vote vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdVote = await _voteService.AddVoteAsync(vote);
            var voteNew = await _voteService.GetByIdAsync(1);

            return CreatedAtAction(nameof(GetById), new { id = createdVote.Id }, vote);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Update([Range(1, int.MaxValue)]int id, [FromBody]Vote vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _voteService.UpdateVoteAsync(id, vote);

            return NoContent();
        }

    }
}