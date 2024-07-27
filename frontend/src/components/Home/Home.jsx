import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="#" className="flex items-center justify-center">
          {/* <HeartIcon className="h-6 w-6 text-primary" /> */}
          <span className="sr-only">Rohini NGO</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          >
            Services
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          >
            Impact
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          >
            Testimonials
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                Rohini NGO
              </h1>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                Providing high-quality, affordable medical services to those in
                need.
              </p>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Us
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Hero Image"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rohini NGO provides a range of high-quality medical services
                  to those in need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Service 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Cataract Surgery</h3>
                <p className="text-sm text-muted-foreground">
                  Restoring sight to those in need through high-quality cataract
                  surgery.
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Service 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">
                  Cleft Lip and Palate Repair
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transforming lives through comprehensive cleft lip and palate
                  treatment.
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Service 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Burn Reconstruction</h3>
                <p className="text-sm text-muted-foreground">
                  Providing comprehensive care and rehabilitation for burn
                  survivors.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rohini NGO has made a significant impact in the lives of those
                  we serve.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width={550}
                height={310}
                alt="Impact Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cataract Surgeries</h3>
                      <p className="text-muted-foreground">
                        Performed over 10,000 cataract surgeries, restoring
                        sight to those in need.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Cleft Lip and Palate Repairs
                      </h3>
                      <p className="text-muted-foreground">
                        Transformed the lives of over 5,000 individuals with
                        cleft lip and palate conditions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Burn Reconstruction</h3>
                      <p className="text-muted-foreground">
                        Provided comprehensive care and rehabilitation to
                        hundreds of burn survivors.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Patients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the people whose lives have been transformed by
                  Rohini NGO.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <img
                    src="/placeholder.svg"
                    width={310}
                    height={310}
                    alt="Testimonial 1"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-40 lg:w-52"
                  />
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground">
                    "Rohini NGO gave me my sight back. I will be forever
                    grateful for their care and expertise."
                  </p>
                </div>
                <div className="grid gap-1">
                  <img
                    src="/placeholder.svg"
                    width={310}
                    height={310}
                    alt="Testimonial 2"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-40 lg:w-52"
                  />
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">
                    "The team at Rohini NGO changed my life. Their dedication
                    and skill are unmatched."
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width={550}
                height={310}
                alt="Testimonial Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 md:py-12 lg:py-24 bg-muted">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2 text-center">
            <Link to="#" className="flex items-center justify-center">
              {/* <HeartIcon className="h-6 w-6 text-primary" /> */}
              <span className="sr-only">Rohini NGO</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Rohini NGO. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              to="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
