'use client';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Phone, Mail, MapPin } from 'lucide-react';

const companyLinks = [
  { title: 'About Wealthzi', href: '#' },
  { title: 'Blogs', href: '#' },
  { title: 'Contact Us', href: '#' },
  { title: 'Terms of Use', href: '#' },
  { title: 'Privacy Policy', href: '#' },
  { title: 'RIA Disclaimers', href: '#' },
  { title: 'Regulatory Disclosure', href: '#' },
  { title: 'Investor Charter', href: '#' },
  { title: 'SCORES Link', href: '#' },
  { title: 'SMARTODR', href: '#' },
];

const productLinks = [
  { title: 'Mutual Funds', href: '#' },
  { title: 'PMS', href: '#' },
  { title: 'AIF', href: '#' },
  { title: 'Fixed Deposits', href: '#' },
  { title: 'Bonds', href: '#' },
  { title: 'Gold', href: '#' },
  { title: 'NFO', href: '#' },
];

const calculatorLinks = [
  { title: 'SIP Calculator', href: '#' },
  { title: 'Lumpsum Calculator', href: '#' },
  { title: 'SIP Goal Calculator', href: '#' },
  { title: 'Fixed Deposit (FD) Calculator', href: '#' },
  { title: 'Recurring Deposit (RD) Calculator', href: '#' },
  { title: 'Loan EMI Calculator', href: '#' },
];

const complianceData = [
  { sl: 1, fy: 'FY 2023-24', status: 'Conducted', remarks: '-' },
];

const disclaimers = [
  "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
  "Registration granted by SEBI, membership of BASL and certification from National Institute of Securities Markets (NISM) in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
  "The information is only for consumption by the client and such material should not be redistributed.",
];


export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#f8fafc]">
      <div className="container py-12 lg:py-16">
        <h2 className="font-heading font-bold text-lg text-white mb-8">BUILD WEALTH WITH CONFIDENCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Column 1: Contact and Compliance */}
            <div className="lg:col-span-6 space-y-8">
                 <div>
                    <p className="text-sm text-[#cbd5e1] font-semibold">Lime Internet Pvt. Ltd</p>
                    <div className="mt-4 space-y-3 text-sm text-[#cbd5e1]">
                        <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>Kanchenjunga Building, 603, 6th Floor, Connaught Place, 18 Barakhamba Road, New Delhi – 110001</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <a href="tel:01142542796" className="hover:text-[#f59e0b]">011-42542796</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:service@wealthzi.com" className="hover:text-[#f59e0b]">service@wealthzi.com</a>
                        </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="font-heading font-semibold text-base text-white mb-4">Status of Annual Compliance Report</h3>
                    <Table className="w-full text-sm text-[#f8fafc] border border-white/20">
                      <TableHeader>
                        <TableRow className="border-white/20">
                          <TableHead className="text-white font-medium">Sr. No</TableHead>
                          <TableHead className="text-white font-medium">Financial Year</TableHead>
                          <TableHead className="text-white font-medium">Compliance Audit Status</TableHead>
                          <TableHead className="text-white font-medium">Remarks, if any</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {complianceData.map((row) => (
                          <TableRow key={row.sl} className="border-white/20 hover:bg-white/10">
                            <TableCell>{row.sl}</TableCell>
                            <TableCell>{row.fy}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.remarks}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                 </div>
            </div>

            {/* Column 2: Links */}
            <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-heading font-semibold text-base text-white">COMPANY</h3>
                        <ul className="mt-4 space-y-3">
                        {companyLinks.map((link) => (
                            <li key={link.title}>
                            <Link href={link.href} className="text-sm text-[#cbd5e1] hover:text-[#f59e0b] transition-colors">
                                {link.title}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading font-semibold text-base text-white">PRODUCTS</h3>
                        <ul className="mt-4 space-y-3">
                        {productLinks.map((link) => (
                            <li key={link.title}>
                            <Link href={link.href} className="text-sm text-[#cbd5e1] hover:text-[#f59e0b] transition-colors">
                                {link.title}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading font-semibold text-base text-white">CALCULATORS</h3>
                        <ul className="mt-4 space-y-3">
                        {calculatorLinks.map((link) => (
                            <li key={link.title}>
                            <Link href={link.href} className="text-sm text-[#cbd5e1] hover:text-[#f59e0b] transition-colors">
                                {link.title}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Regulatory */}
         <div className="mt-12 lg:mt-16 border-t border-white/20 pt-8 text-xs text-[#cbd5e1] space-y-4">
            <p><span className='font-semibold'>BSE Member code:</span> 58371</p>
            <p>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
            <p>Wealthzi Investment Advisers (A division of Lime Internet Private Limited)</p>
            <p>[<span className='font-semibold'>CIN:</span> U74999DL2017PTC310507] [<span className='font-semibold'>PAN:</span> AADCL2103M] [<span className='font-semibold'>GSTIN:</span> 07AADCL2103M1ZP]</p>
            <p>[<span className='font-semibold'>SEBI Registered Name:</span> Lime Internet Private Limited] [<span className='font-semibold'>SEBI RIA Registration No:</span> INA000018133] [<span className='font-semibold'>BASL Member ID:</span> 2014] [<span className='font-semibold'>Type of Registration:</span> Non-Individual] [<span className='font-semibold'>Validity of Registration:</span> Perpetual]</p>
            <p>[<span className='font-semibold'>Registered Address:</span> Flat No. 603, 6th Floor, Kanchenjunga Building, 18 Barakhamba Road, New Delhi - 110001]</p>
            <p>[<span className='font-semibold'>Principal Officer:</span> Jyoti Prakash Nayak, Email: jyoti.prakash@wealthzi.com] [<span className='font-semibold'>Compliance Officer:</span> Harshit Singh, Email: harshit.singh@wealthzi.com] [<span className='font-semibold'>Grievance Officer:</span> Sanjeev Johari, Email: sanjeev.johari@nivesh.com]</p>
            <p>[<span className='font-semibold'>SEBI Regional Office Address:</span> Securities and Exchange Board of India, NBCC Complex, Office Tower-1, 8th Floor, Plate B, East Kidwai Nagar, New Delhi - 110023, Ph: 011-69012998, Email: sebinro@sebi.gov.in]</p>
        </div>


        {/* Disclaimers */}
        <div className="mt-12 lg:mt-16 border-t border-white/20 pt-8 text-xs text-[#cbd5e1]">
            <h3 className="font-heading font-semibold text-base text-white mb-4">Disclaimers:</h3>
            <div className="space-y-4">
            {disclaimers.map((disclaimer, index) => (
                <p key={index}>{disclaimer}</p>
            ))}
            </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-[#cbd5e1]">
             <p>&copy; {new Date().getFullYear()} Wealthzi Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
