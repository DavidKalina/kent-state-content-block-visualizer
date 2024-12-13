import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, Hotel } from "lucide-react";

const ConferenceRegistration = () => {
  const preConferenceEvents = [
    {
      name: "CEO Roundtable",
      time: "3pm - 5pm",
      description:
        "Join your peers for a frank and open-ended discussion on issues affecting your employee-owned company.",
    },
    {
      name: "CFO Roundtable",
      time: "3pm - 5pm",
      description:
        "Connect with other financial leaders to discuss challenges and opportunities in employee ownership.",
    },
    {
      name: "HR Roundtable",
      time: "3pm - 5pm",
      description:
        "Discuss HR and communication challenges and exchange ideas within an open forum structure.",
    },
    {
      name: "Opening Night Reception",
      time: "5pm - 7pm",
      description: "Network with peers while enjoying drinks and appetizers.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          2025 Annual Ohio Employee Ownership Conference
        </h1>
        <p className="text-xl text-gray-600">April 9-10, 2025 • Akron Fairlawn Hilton</p>
      </div>

      {/* Key Information Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dates Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm">Pre-Conference: April 9th, 2025</li>
              <li className="text-sm">Main Conference: April 10th, 2025</li>
              <li className="text-sm font-medium text-red-600">
                Early Bird Deadline: March 14th, 2025
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Hotel Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hotel className="h-5 w-5" />
              Hotel Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">Akron Fairlawn Hilton</p>
            <p className="text-sm mb-2">King Bed Deluxe Room: $159.00</p>
            <p className="text-sm">Book by phone: 330-867-5000</p>
            <Button variant="link" className="p-0 h-auto text-sm">
              Book Online →
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/path-to-pre-conference-form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button variant="outline" className="w-full">
                Download Pre-Conference Form
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Pre-Conference Events */}
      <Card>
        <CardHeader>
          <CardTitle>Pre-Conference Events - April 9th</CardTitle>
          <CardDescription>
            All pre-conference events include access to the Opening Night Reception
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {preConferenceEvents.map((event, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">{event.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.time}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Registration Rates */}
      <Card>
        <CardHeader>
          <CardTitle>Registration Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="individual">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="individual">Individual Rates</TabsTrigger>
              <TabsTrigger value="group">Group Rates (5+)</TabsTrigger>
            </TabsList>
            <TabsContent value="individual" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Registration Type</th>
                      <th className="text-left py-2">Network Members</th>
                      <th className="text-left py-2">Professional Members</th>
                      <th className="text-left py-2">General Audience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Early Bird</td>
                      <td className="py-3 text-green-600">$150</td>
                      <td className="py-3">$200</td>
                      <td className="py-3">$250</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Regular</td>
                      <td className="py-3 text-green-600">$175</td>
                      <td className="py-3">$225</td>
                      <td className="py-3">$300</td>
                    </tr>
                    <tr>
                      <td className="py-3">At Door</td>
                      <td className="py-3 text-green-600">$200</td>
                      <td className="py-3">$250</td>
                      <td className="py-3">$325</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="group" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Registration Type</th>
                      <th className="text-left py-2">Network Members</th>
                      <th className="text-left py-2">Professional Members</th>
                      <th className="text-left py-2">General Audience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Early Bird</td>
                      <td className="py-3 text-green-600">$115</td>
                      <td className="py-3">$175</td>
                      <td className="py-3">$225</td>
                    </tr>
                    <tr>
                      <td className="py-3">Regular</td>
                      <td className="py-3 text-green-600">$150</td>
                      <td className="py-3">$200</td>
                      <td className="py-3">$250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="text-center space-y-2">
        <p className="text-gray-600">
          Questions about registration? Contact Kelley Fitts at kfitts@kent.edu
        </p>
        <p className="text-sm text-gray-500">
          Not sure about your membership status? Email us to confirm.
        </p>
      </div>
    </div>
  );
};

export default ConferenceRegistration;
