import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Donation() {
  const [amount, setAmount] = useState("");
  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/donations/", {
        amount,
      });
      console.log(res.data);
      handlePaymentVerify(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentVerify = async (data) => {
    const options = {
      key: "",
      amount: data.amount,
      currency: data.currency,
      name: "Harsh",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          // console.log("Before axios");
          const res = await axios.post(
            "http://localhost:8000/api/v1/donations/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          const verifyData = res.data;

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Donate to Right to Oral Health in India
            </h1>
            <p className="text-lg text-muted-foreground">
              Smile for Health is a non-profit organization dedicated to
              providing free dental care and oral health education to
              underprivileged communities. Your donation can help us improve
              dental health and bring smiles to those in need.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Input field for donation amount */}
              <input
                type="number"
                placeholder="Enter amount"
                className="flex-1 border px-4 py-2 rounded-md text-black"
                // value={amount}
                // onChange={(e) => setAmount(e.target.value)}
              />
              <button
                // onClick={handlePayment}
                className="flex-1 bg-black text-white"
              >
                Donate Now
              </button>
            </div>
          </div>
          <div>
            <img
              src="/dental_care_main.jpg"
              width="600"
              height="400"
              alt="Children receiving dental care"
              className="mx-auto rounded-lg object-cover"
            />
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                {/* <ToothIcon className="h-10 w-10 text-primary" /> */}
                <div>
                  <h3 className="text-xl font-semibold">
                    10,000 Smiles Restored
                  </h3>
                  <p className="text-muted-foreground">
                    We've provided dental care to over 10,000 individuals,
                    restoring smiles and improving oral health.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                {/* <ToothbrushIcon className="h-10 w-10 text-primary" /> */}
                <div>
                  <h3 className="text-xl font-semibold">
                    5,000 Oral Health Kits Distributed
                  </h3>
                  <p className="text-muted-foreground">
                    We've distributed over 5,000 oral health kits to promote
                    good dental hygiene practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                {/* <VolunteerIcon className="h-10 w-10 text-primary" /> */}
                <div>
                  <h3 className="text-xl font-semibold">300+ Volunteers</h3>
                  <p className="text-muted-foreground">
                    Our efforts are supported by a dedicated team of over 300
                    volunteers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "Smile for Health has made a huge difference in my life. The
                  dental care I received has given me back my confidence and
                  improved my overall health."
                </p>
                <cite className="text-sm font-medium">- John, Beneficiary</cite>
              </blockquote>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "Volunteering with Smile for Health has been a rewarding
                  experience. Knowing that we're making a positive impact on
                  people's lives is incredibly fulfilling."
                </p>
                <cite className="text-sm font-medium">- Emily, Volunteer</cite>
              </blockquote>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <blockquote className="space-y-2">
                <p className="text-muted-foreground">
                  "The work that Smile for Health does is invaluable. They are
                  truly making a difference in our community."
                </p>
                <cite className="text-sm font-medium">
                  - Lisa, Community Leader
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Work</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/dental_care_work_1.jpg"
              width="400"
              height="300"
              alt="Children receiving dental care"
              className="rounded-lg object-cover"
            />
            <img
              src="/dental_care_work_2.jpg"
              width="400"
              height="300"
              alt="Volunteers educating about oral health"
              className="rounded-lg object-cover"
            />
            <img
              src="/dental_care_work_3.jpg"
              width="400"
              height="300"
              alt="Children smiling"
              className="rounded-lg object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
