export const home =  /*html*/ `
	<div id="home-view" class="flex flex-col items-center w-full min-h-screen justify-center ">
		<h1 class="text-6xl font-bold mb-2">
			Home
		</h1>
		<div class="flex flex-col items-center">
			<button  id="fetch-data" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >Get data</button>
			<pre id="auth-data"></pre>
		</div>
		<div class="flex flex-col items-center">
			<button id="find-match" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >Find Match</button>
		</div>
		<div class="flex flex-col items-center">
			<button id="fetch-friends" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >Get Friends</button>
			<pre id="friends-data"></pre>
		</div>
			<form id="form-friend" class="flex flex-col items-center">
				<input type="text" class="bg-gray-600 px-1 py-3" name="username" />
				<button type="submit" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >add friend</button>
			</form>
		<div class="flex flex-col max-w-sm items-center">
			<button id="fetchapi-data" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >Get api data</button>
			<pre id="api-data" class="overflow-x-hidden"></pre>
		</div>
		<div class="flex flex-col max-w-sm items-center">
			<button id="send-notif" class="py-2 px-4 my-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white" >Notify me</button>
		</div>
		<div class="max-w-sm flex flex-col items-center">
			<ol id="notif-container"></ol>
		</div>
		<button id="logout" class="py-2 px-4 text-white bg-gray-500 font-semibold rounded-lg
			hover:bg-gray-600 transition duration-300">Logout</button>
		<button id="ban-self"
			class="py-2 px-4 m-1 rounded-lg text-white font-semibold
				 bg-blue-500 hover:bg-blue-600 transition duration-300">BAN ME</button>
		<a href="/404" class="py-2 px-4 m-1 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300">go to 404</a>
		<a href="/auth/login" class="py-2 px-4 m-1 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300">go to auth</a>
		<a href="/non-existing" class="py-2 px-4 m-1 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300">go to non-existing</a>
		<a href="/settings" class="py-2 px-4 m-1 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300">Settings</a>
	</div>
`

export default /*html*/ `

<div id="home-view" class="home-container">
	<div class="inner-container">
		<div class="left-side">
			<div class="tournament-view">
				<div class="content">
					<h1 class="tournament-title">Ultimate Ping Pang Worlds 2025<h1>
					<p class="notes" >Ping pong tournament made to make you experience an intense gameplay with a lot of rewards, dont miss it!<p>
					<div class="button-div">
						<button id="join-tournament-btn" class="join">Join now<button>
					</div>
				</div>
			</div>
			<div class="leaderboard-preview">
				<div class="leaderboard-background">
					<h1 class="leaderboard-title">Leaderboard</h1>
				</div>
						<div class="leaderboard-item">
							<span class="rankone">1</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player One</span>
							<span class="score">2000</span>
						</div>
						<div class="leaderboard-item">
							<span class="ranktwo">2</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Two</span>
							<span class="score">1800</span>
						</div>
						<div class="leaderboard-item">
							<span class="rankthree">3</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Three</span>
							<span class="score">1600</span>
						</div>
						<div class="leaderboard-item">
							<span class="rank">4</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Four</span>
							<span class="score">1400</span>
						</div>
						<div class="leaderboard-item">
							<span class="rank">5</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Five</span>
							<span class="score">1200</span>
						</div>
						<div class="leaderboard-item">
							<span class="rank">6</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Five</span>
							<span class="score">1000</span>
						</div>
						<div class="leaderboard-item">
							<span class="rank">7</span>
							<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
							<span class="name">Player Five</span>
							<span class="score">900</span>
						</div>
				</div>
			</div>
		</div>
		<div class="right-side">
			<div class="header-div">
				<h1 class="titles">Friends list<h1>
			</div class="friend-list-container">
				<ul class="friend-list">
				<li class="friend-item">
				<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Alice">
				<div class="friend-info">
					<span class="friend-name">Alice</span>
					<span class="friend-status online">
					<span class="status-circle"></span> Online
					</span>
				</div>
				</li>
				<li class="friend-item">
				<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Bob">
				<div class="friend-info">
					<span class="friend-name">Bob</span>
					<span class="friend-status in-queue">
					<span class="status-circle"></span> In Queue
					</span>
				</div>
				</li>
				<li class="friend-item">
				<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Charlie">
				<div class="friend-info">
					<span class="friend-name">Charlie</span>
					<span class="friend-status in-game">
					<span class="status-circle"></span> In Game
					</span>
				</div>
				</li>
				<li class="friend-item">
				<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of David">
				<div class="friend-info">
					<span class="friend-name">David</span>
					<span class="friend-status offline">
					<span class="status-circle"></span> Offline
					</span>
				</div>
				</li>
				<li class="friend-item">
				<img class="profile-photo" src="/public/assets/dog.png" alt="Profile photo of Emma">
				<div class="friend-info">
					<span class="friend-name">Emma</span>
					<span class="friend-status online">
					<span class="status-circle"></span> Online
					</span>
				</div>
				</li>
			</ul>
		</div>
	</div>
</div>

`