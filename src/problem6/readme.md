
##  Problem6 ##
##  Problem6 ##

## Diagram Please download '99tchteam.problem6.drawio' file from src/problem6:##
## Execution Flow ##
User Request → Trigger an API request to update the score.
API receives request → Check authorization.
Server updates score → Saves the updated score in the database.
Notify clients via WebSocket → Clients receive real-time updates.

Nice to have API Documentation, Swagger or Postman;

Update User Score
Description: When a user completes an action, an API call is made to this endpoint to update their score.
Authorization: This endpoint requires an authorization token to prevent unauthorized users from modifying scores. May include a Bearer token in the Authorization header.

Real-Time Updates
To enable live updates of the scoreboard, the server will push updates to clients using WebSockets. This ensures that the leaderboard on the frontend is automatically refreshed when a score is updated.

