
'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-left mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Id*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={4}
                  />
                </div>
                <div>
                  <p className="text-sm text-destructive mb-4">*All Fields are mandatory</p>
                  <Button type="submit" className="w-full md:w-auto" variant="outline">
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-primary mt-1" />
              <div>
                <p className="font-semibold text-lg text-foreground">
                  011-42542796
                  <br />
                  +91-9818465241
                </p>
                <p className="text-foreground">(10 am-6pm IST, Mon-Friday)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-primary mt-1" />
              <div>
                <p className="font-semibold text-lg text-foreground">service@wealthzi.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-primary mt-1" />
              <div>
                <p className="font-semibold text-lg text-foreground">Lime Internet Pvt Ltd</p>
                <p className="text-foreground">
                  Kanchenjunga Building, #603, 6th Floor, Connaught Place, 18 Barakhamba Road, New Delhi – 110001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
