<template>
	<main>
		<section class="first screen">
			<div>
				<h1>Erofei S.</h1>
				<h2>Fullstack Developer</h2>
			</div>
		</section>
	</main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	main {
		> section {
			&.screen {
				display: flex;
				height: 100vh;
				min-height: 400px;
			}


			&.first {
				display: flex;
				justify-content: center;
				align-items: center;

				text-align: center;

				cursor: default;


				h1,
				h2,
				h3 {
					margin: 0;
					display: flex;
					line-height: 1;

					color: #fff;
					background: linear-gradient(271deg,#a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				h1 {
					// font-size: 11.5em;
					font-size: 12vw;
				}

				h2 {
					// font-size: 4.85em;
					// padding-left: .1em;
					font-size: 5vw;
					padding-left: .5vw;
				}
			}
		}
	}

</style>
