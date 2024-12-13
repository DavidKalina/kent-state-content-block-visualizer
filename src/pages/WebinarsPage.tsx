import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, ExternalLink, Users } from "lucide-react";

const WebinarsPage = () => {
  const pricingData = [
    {
      type: "Network Members",
      liveWebinars: "Unlimited free registrations",
      archivedWebinars: "Unlimited and free access",
    },
    {
      type: "Non-Network Members",
      liveWebinars: "$40 per registrant per webinar",
      archivedWebinars: "$40 per webinar",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Network Webinars</h1>
        <p className="text-xl text-gray-600">
          Join your fellow employee-owners and ESOP experts in our series of educational webinars
        </p>
      </div>

      {/* Upcoming Webinar Featured Card */}
      <Card className="border-l-4 border-l-blue-600">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
            <Calendar className="h-4 w-4" />
            Wednesday, Jan 29th, 10-11 am
          </div>
          <CardTitle>
            Strategies to Enhance the Effectiveness of Compensation Programs for ESOP Companies
          </CardTitle>
          <CardDescription className="text-base">
            Presented by Tim Jamison and David Horvath, Prairie Capital Advisors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Compensation committees of ESOP companies often look for benchmarking tools that help
            determine reasonable market ranges for executive positions. We will discuss available
            resources and ideas for long-term equity incentives that align with stakeholders'
            interests.
          </p>
        </CardContent>
        <CardFooter className="flex gap-4">
          <a
            href="https://register.gotowebinar.com/register/8489300035133441630"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700">
              Network Members Register Here
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.oeockent.org/ohios-eo-network/network-webinars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              Non-Network Members Register Here
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Pricing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Webinar Pricing
          </CardTitle>
          <CardDescription>
            Network members enjoy unlimited free access to all webinars
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Membership Type</TableHead>
                <TableHead>Live Webinars</TableHead>
                <TableHead>Archived Webinars</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.type}</TableCell>
                  <TableCell>{row.liveWebinars}</TableCell>
                  <TableCell>{row.archivedWebinars}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <a href="/network-signup" className="no-underline">
            <Button variant="outline" className="bg-gray-50">
              Consider joining Ohio's Employee-Owned Network →
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Contact Information */}
      <div className="text-center space-y-2">
        <p className="text-gray-600">
          Questions about registration? Contact us at oeoc@kent.edu or call 330-672-3028
        </p>
        <p className="text-sm text-gray-500">
          After payment, a registration link will be emailed to you
        </p>
      </div>
    </div>
  );
};

export default WebinarsPage;
