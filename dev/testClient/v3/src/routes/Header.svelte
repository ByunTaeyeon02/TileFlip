<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/TF.png';
	
	let userType = 2;			// 0 = admin, 1 = regular, 2 = guest
	let loginPage = true;
	let success = false;
	let welcomMsg = "";
	let userName = "";
	let password = "";
	let password2 = "";

    function logOutPressed() {
		userType = 2;
		success = false;
		loginPage = true;
		userName = "";
		password = "";
		password2 = "";
	}

    function logInPressed() {
		let bool1 = userName === "" && password === "";
		let bool2 = password === password2;
		if (!bool1) {
			if (loginPage || (!loginPage && bool2)) {
				success = true;
				welcomMsg = "Welcome back " + "username";
				userType = 1;
			}
		}
	}

	function toggleLoginPage() {
		if (loginPage)
			loginPage = false
		else 
			loginPage = true;
	}
</script>

<style>
	ul {
		display: flex;
		margin: 0;
		margin-left: auto;
		list-style:none;
	}

	li {
		margin-right: 15px;
        font-size: 1.5vh;
	}

	a,input,button,p {
		font-family: 'BadComic';
	}

	.logo-container {
		display:flex;
    }

    .text {
        transition: opacity 0.3s ease-in-out; 
        opacity: 0;
    }

    .logo-container:hover .text {
        opacity: 1;
    }
</style>

<header>
	<div class="navbar bg-base-100 shadow-2xl">
		<div class="flex-1 pl-3"> 
			<div class="logo-container">
				<div class="w-10 rounded">
					<img src={logo} alt="Tile Flip Logo">
				</div>
				<p class="text-4xl pl-3 text">Tile Flip</p>
			</div>
		</div>
		<div class="flex-none">
			<label class="swap swap-rotate">
  				<input type="checkbox" class="theme-controller" value="dark" />
				<svg class="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
				<svg class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
			</label>
		  	<ul class="menu menu-horizontal px-1">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Game</a>
					</li>
					{#if userType > 1} 
						<li>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<a on:click={logInPressed} onclick="my_modal_1.showModal()">Log-in</a>
						</li>
					{:else}
					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
						<a href="/score">Score</a>
					</li>
					<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
						<a href="/settings">Settings</a>
					</li>
						<li>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<a on:click={logOutPressed}>Log-out</a>
						</li>
					{/if}
				</ul>
			  </div>
		  </ul>
		</div>
	  </div>
</header>
<body>
	<dialog id="my_modal_1" class="modal">
		<div class="modal-box">
		  	<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
			{#if success} 
				<p class="font-bold text-xl">Log In Successfull</p>
				<p class="py-4">{welcomMsg}</p>
			{:else}
				{#if loginPage} 
					<p class="font-bold text-xl">Log In</p>
					<div class="p-3"></div>
					<label class="input input-bordered flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
						<input type="text" class="grow" placeholder="Username" bind:value={userName}/>
					</label>
					<div class="p-2"></div>
					<label class="input input-bordered flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
						<input type="password" class="grow" placeholder="Password" bind:value={password}/>
					</label>
					<div class="modal-action">
						<button class="btn btn-link" on:click={toggleLoginPage}>New user? Sign up here!</button> 
						<button class="btn" on:click={logInPressed}>Log in</button>
					</div>
				{:else}
					<p class="font-bold text-xl">Sign Up</p>
					<div class="p-3"></div>
					<label class="input input-bordered flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
						<input type="text" class="grow" placeholder="Username" bind:value={userName}/>
					</label>
					<div class="p-2"></div>
					<label class="input input-bordered flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
						<input type="password" class="grow" placeholder="Password" bind:value={password}/>
					</label>
					<div class="p-2"></div>
					<label class="input input-bordered flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
						<input type="password" class="grow" placeholder="Re-enter Password" bind:value={password2}/>
					</label>
					<div class="modal-action">
						<button class="btn btn-link" on:click={toggleLoginPage}>Returning user? Log-in here!</button>
						<button class="btn" on:click={logInPressed}>Sign up</button>
					</div>
				{/if}
			{/if}
			
		</div>
	</dialog>
</body>
