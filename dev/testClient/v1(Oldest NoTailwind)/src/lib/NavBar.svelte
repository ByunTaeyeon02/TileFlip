<script lang="js">
    import { navigate } from 'svelte-routing';
    import { onMount, onDestroy } from 'svelte';
    import TailwindCss from './TailwindCSS.svelte';
 

    let userType = 1;			// 0 = admin, 1 = regular, 2 = guest

    function navToGame() {
		navigate("/");
	}

    function navToScore() {
		navigate("/Score");
	}

    function navToSettings() {
		navigate("/Settings");
	}

    function logOutPressed() {
		userType = 2;
	}

    function logInPressed() {
		userType = 1;
	}
</script>

<style>
	.nav {
		display:flex;
	}

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

	h1 {
		margin: 0;
        font-size: 2vh;
	}
</style>

<TailwindCss />

<html lang="en">
	<body class="nav">
		<h1>Tile Flip</h1>
        <h1 class="text-3xl font-bold underline">Tile</h1>
		<ul>
            <li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={navToGame}>Game</a>
            </li>
            {#if userType > 1} 
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={logInPressed}>Log-in</a>
            {:else}
                <li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={navToScore}>Score</a>
                </li>
                <li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={navToSettings}>Settings</a>
                </li>
                <li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={logOutPressed}>Log-out</a>
                </li>
            {/if}
        </ul>
	</body>
</html>