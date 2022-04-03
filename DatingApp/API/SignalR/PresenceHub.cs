using System;
using System.Threading.Tasks;
using API.Extensions;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class PresenceHub: Hub
    {
        public override async Task OnConnectedAsync(){
            await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUsername());
        }

        public override async Task OnDisconnectedAsync(Exception exception) {
            
        }
    }
}