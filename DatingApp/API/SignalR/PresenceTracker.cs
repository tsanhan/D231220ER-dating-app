using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.SignalR
{
    public class PresenceTracker
    {
        private static readonly Dictionary<string, List<string>> OnlineUsers = new Dictionary<string, List<string>>();
        // private static readonly ConcurrentDictionary<string, List<string>> OnlineUsers = new ConcurrentDictionary<string, List<string>>();

        public Task UserConnected(string username, string connectionId)
        {
            // GetOnlineUsers 
            lock (OnlineUsers)
            {
                if (!OnlineUsers.ContainsKey(username))
                {
                    OnlineUsers.Add(username, new List<string>());
                }
                OnlineUsers[username].Add(connectionId);
            }

            return Task.CompletedTask;

        }

        public Task UserDisconnected(string username, string connectionId)
        {
            lock (OnlineUsers)
            {
                if (!OnlineUsers.ContainsKey(username)) return Task.CompletedTask;

                OnlineUsers[username].Remove(connectionId);

                if(OnlineUsers[username].Count == 0) {
                    OnlineUsers.Remove(username);
                }
            }

            return Task.CompletedTask;
        }
    
    
        public Task<string[]> GetOnlineUsers() {
            string[] onlineUsers;
            lock (OnlineUsers)
            {   
                onlineUsers = OnlineUsers.OrderBy(x => x.Key).Select(x => x.Key).ToArray();
            }
            return Task.FromResult(onlineUsers);
        }
    }
}