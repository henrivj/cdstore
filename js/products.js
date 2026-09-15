const products = [
	{
		image: "https://kimi-web-img.kimi.ai/img/i.scdn.co/2e17449ed3123ed6d669dd0e525536e9700b6a5b",
		band: "Ramones",
		category: "CDs",
		name: "Brain Drain",
		price: 45
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/pure-music.co.uk/3db431320b63f50f70db70a67b32266c89b92277.jpg",
		band: "Pink Floyd",
		category: "CDs",
		name: "The Dark Side of the Moon",
		price: 55
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/cdn.media.amplience.net/17b50ba11f334f0a45b022f385cdefc763883e56",
		band: "Metallica",
		category: "Vinyls",
		name: "Master of Puppets",
		price: 180
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/c99a23121e9cceb15ce4a4d6c5bdde364db1b6fc.jpg",
		band: "The Beatles",
		category: "Vinyls",
		name: "Abbey Road",
		price: 160
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/i.scdn.co/95ab8f0f759ab9ec6ad311ccbbc6ec0175f8599c",
		band: "Radiohead",
		category: "CDs",
		name: "OK Computer",
		price: 50
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/s3.amazonaws.com/4db0f8c7bcec33d2be2524efe6833c5c369c28a6.jpg",
		band: "Amy Winehouse",
		category: "CDs",
		name: "Back to Black",
		price: 40
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/muzikercdn.com/a66ff01e48d82c0a6f9e38adce5eb6137b0505b1.jpg",
		band: "Daft Punk",
		category: "Vinyls",
		name: "Random Access Memories",
		price: 220
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/i.scdn.co/eadb8af89489b6f9918027c2d3ba1837993be71f",
		band: "Arctic Monkeys",
		category: "Cassettes",
		name: "AM",
		price: 35
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/b7acfaa1e1ba88ff113f9214296f071b16e1b4c1.png",
		band: "David Bowie",
		category: "Vinyls",
		name: "Blackstar",
		price: 175
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/6547cd9ad96613752d4a2bd49462d16984299a14.png",
		band: "Tame Impala",
		category: "Vinyls",
		name: "Currents",
		price: 190
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/4bbfb9d6f842c519c2cb8c08e3e53363ce17e27a.jpg",
		band: "Miles Davis",
		category: "Vinyls",
		name: "Kind of Blue",
		price: 165
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/storage.highresaudio.com/0876f1fb4ff6f7c024be1e880d8868dce739fd01.jpg",
		band: "Iron Maiden",
		category: "CDs",
		name: "Powerslave",
		price: 60
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/vinylnirvana.co.uk/6a0c99d19599bdbabf8b42e10f094d42e3ef32ee.jpg",
		band: "Queen",
		category: "Vinyls",
		name: "A Night at the Opera",
		price: 155
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/639d8385b22f514cc40913a5fcdaf1c710480cc2.png",
		band: "Kendrick Lamar",
		category: "CDs",
		name: "To Pimp a Butterfly",
		price: 48
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/upload.wikimedia.org/e291529b4b50a70d5c8c87e177da610938dba3cc.PNG",
		band: "Fleetwood Mac",
		category: "Vinyls",
		name: "Rumours",
		price: 150
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/media.pitchfork.com/ca5ae721539dccc4e2ac42be7f60180e9b862ac5.jpg",
		band: "Led Zeppelin",
		category: "Vinyls",
		name: "IV",
		price: 170
	},
	{
		image: "https://kimi-web-img.kimi.ai/img/i.scdn.co/fda3129c10695901fab0bf912796e5b75a59e95f",
		band: "Michael Jackson",
		category: "CDs",
		name: "Thriller",
		price: 42
	}
]

const cardGrid = document.getElementById("card-grid")

function loadProducts() {
	products.map((p) => {
		cardGrid.innerHTML += `
			<a href="/product.html" class="card">
				<img src="${p.image}" alt="" />
				<div>
					<h4>${p.name}</h4>
					<div class="card-details">
						<div>
							<p>${p.band}</p>
							<p>R$ <span>${p.price.toFixed(2)}</span></p>
						</div>
						<i class="icon-add-to-cart"></i>
					</div>
				</div>
			</a>
		`
	})
}

loadProducts()
