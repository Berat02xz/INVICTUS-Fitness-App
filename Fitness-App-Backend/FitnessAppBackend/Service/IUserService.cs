﻿using FitnessAppBackend.Model;

namespace FitnessAppBackend.Service
{
    public interface IUserService : IGenericService<User>
    {
        Task<User?> GetUserByEmailAsync(string email);

        String HashPassword(string password);

        Task<ICollection<User?>> GetAllLazy();
        bool VerifyPassword(string password, string passwordHash);
    }
        
}
