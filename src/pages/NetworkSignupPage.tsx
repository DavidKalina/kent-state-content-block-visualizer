import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import pdf from "@/assets/member-form.pdf";

const NetworkSignupPage = () => {
  const benefits = [
    "Free consultation services with OEOC experts",
    "Generous discounts on personalized in-company training",
    "Access to 120+ professional service providers",
    "Build employee involvement skills",
    "Network with other employee-owned companies",
    "Participate in joint education and training programs",
  ];

  const pricingRows = [
    {
      event: "Webinar Series",
      member: "Free",
      nonMember: "$40",
    },
    {
      event: "Annual Conference",
      member: "From $115/person",
      nonMember: "From $225/person",
    },
    {
      event: "CEO/CFO Roundtables",
      member: "Virtual: Free, In-person: $50",
      nonMember: "Virtual: $50, In-person: $100",
    },
    {
      event: "Employee Owner Retreat",
      member: "$450",
      nonMember: "$775",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Join Ohio's Employee-Owned Network</h1>
        <p className="text-xl text-gray-600">
          1 in 4 ESOP Companies in Ohio are Members of Our Network
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription className="text-lg">
            To provide a forum for employee-owned businesses to learn from each other and make
            employee ownership work more effectively within their companies.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Membership Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pricing Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Member Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Event</th>
                    <th className="text-left py-2">Member Price</th>
                    <th className="text-left py-2">Non-Member</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{row.event}</td>
                      <td className="py-3 text-green-600 font-medium">{row.member}</td>
                      <td className="py-3 text-gray-600">{row.nonMember}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-8">
        <h2 className="text-2xl font-bold">Unlock the Benefits of Employee Ownership</h2>
        <div className="flex justify-center gap-4">
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Download Membership Form
            </Button>
          </a>
        </div>
        <p className="text-gray-600">Questions? Contact us at 330-672-3028 or oeoc@kent.edu</p>
      </div>
    </div>
  );
};

export default NetworkSignupPage;
