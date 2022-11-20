<template>
	<main>
		<section class="first screen">
			<div class="inner">
				<h1>Jerofej S.</h1>
				<h2>Senior Web Programer</h2>
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

				cursor: default;

				> .inner {
					// display: flex;
					// flex-direction: column;
					// justify-content: center;
					// align-items: center;


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
						line-height: 1.4 !important;

						font-size: 12vw;
						// word-spacing: -.5vw;
					}

					h2 {
						margin-top: -.4vw;

						// padding-left: .5vw;
						line-height: 1.4;

						font-size: 4.8vw;


						> span {
							// width: 4.5vw;
						}
					}
				}
			}
		}
	}

</style>
