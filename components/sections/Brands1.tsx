import Marquee from 'react-fast-marquee'

export default function Brands1() {
	return (
		<>
			<section className="section-brands-1 section-padding">
				<div className="container">
					<div className="text-center">
						<h2 className="text-primary-1">Trusted by clients across industries</h2>
						<p className="text-300">
							From logistics and education to healthcare and e-commerce,<br />
							I've built web apps and backend systems that drive real business outcomes.
						</p>
					</div>
				</div>

				{/* Logo Carousel */}
				<div className="container-fluid">
					<Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
						<ul className="carouselTicker__list">

							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/aladdin.svg" alt="Aladdin-EG" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/cottonhouse.png" alt="Cotton House Kidswear" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/corddigital.png" alt="CordDigital" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/grandgate.png" alt="Grand Gate" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/neo.png" alt="Neo Health Register" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/duke.png" alt="Duke" width={80} />
							</li>
							<li className="carouselTicker__item">
								<img src="assets/imgs/brands/brands-1/modevia.png" alt="Modevia" width={80} />
							</li>

						</ul>
					</Marquee>
				</div>
			</section>
		</>
	)
}
