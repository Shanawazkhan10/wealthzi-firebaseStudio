'use client';
import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
  { title: 'SMARTOUR', href: '#' },
];

const productLinks = [
  { title: 'Mutual Funds', href: '#' },
  { title: 'PMS (Portfolio Management Services)', href: '#' },
  { title: 'AIF (Alternative Investment Funds)', href: '#' },
  { title: 'Fixed Deposits', href: '#' },
  { title: 'Bonds', href: '#' },
  { title: 'Gold', href: '#' },
  { title: 'NFO (New Fund Offerings)', href: '#' },
];

const calculatorLinks = [
  { title: 'SIP Calculator', href: '#' },
  { title: 'Lumpsum Calculator', href: '#' },
  { title: 'SIP Goal Calculator', href: '#' },
  { title: 'Fixed Deposit (FD) Calculator', href: '#' },
  { title: 'Recurring Deposit (RD) Calculator', href: '#' },
  { title: 'Loan EMI Calculator', href: '#' },
];

const regulatoryInfo = [
  'BSE Member code: 45371',
  'Mutual Fund Investments are subject to market risks',
  'Wealthzi Investment Adviser (A division of Lime Internet Private Limited)',
];

const complianceData = [
  { sl: 1, fy: 'FY 2023-24', status: 'Conducted', remarks: '-' },
];

const legalDetails = [
    { label: 'CIN', value: 'U7A9990L2017PTG310507' },
    { label: 'PAN', value: 'AADCL2103M' },
    { label: 'GSTIN', value: '07AADCL2103M12P' },
    { label: 'SEBI Registered Name', value: 'Lime Internet Private Limited' },
    { label: 'SEBI RIA Registration No', value: 'INA000018133' },
    { label: 'BSE Member ID', value: '2014' },
    { label: 'Type of Registration', value: 'Non-Individual' },
    { label: 'Validity of Registration', value: 'Perpetual' },
];

const disclaimers = [
    "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
    "Registration granted by SEBI, membership of BSE, and certification from National Institute of Securities Markets (NISM) in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
    "The information is only for consumption by the client and such material should not be redistributed.",
    "Mutual Fund Investments are subject to market risks, read all scheme related documents carefully.",
];


export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#f8fafc]">
      <div className="container py-12 lg:py-16">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
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
          {/* Column 2: Products */}
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
          {/* Column 3: Calculators */}
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
          {/* Column 4: Regulatory */}
          <div>
            <h3 className="font-heading font-semibold text-base text-white">REGULATORY</h3>
            <ul className="mt-4 space-y-3">
              {regulatoryInfo.map((info) => (
                <li key={info} className="text-sm text-[#cbd5e1]">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Table */}
        <div className="mt-12 lg:mt-16 border-t border-white/20 pt-8">
          <h3 className="font-heading font-semibold text-base text-white mb-4">Annual Compliance Report</h3>
            <Table className="w-full text-sm text-[#f8fafc] border border-white/20">
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white font-medium">Sl. No</TableHead>
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

        {/* Company Details */}
        <div className="mt-12 lg:mt-16 border-t border-white/20 pt-8">
            <h3 className="font-heading font-semibold text-base text-white mb-4">COMPANY LEGAL DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                <div className="space-y-4">
                    {legalDetails.slice(0, 4).map(detail => (
                        <div key={detail.label}>
                            <p className="font-semibold text-white">{detail.label}</p>
                            <p className="text-[#cbd5e1]">{detail.value}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-4">
                     {legalDetails.slice(4).map(detail => (
                        <div key={detail.label}>
                            <p className="font-semibold text-white">{detail.label}</p>
                            <p className="text-[#cbd5e1]">{detail.value}</p>
                        </div>
                    ))}
                </div>
                 <div>
                    <h4 className="font-semibold text-white mb-2">REGISTERED ADDRESS</h4>
                    <p className="text-[#cbd5e1]">
                        Flat No. 603, 6th Floor, Kanchanjunga Building,<br/>
                        18 Barakhamba Road, New Delhi – 110001<br/>
                        Phone: 011-42542796<br/>
                        Email: service@wealthzi.com
                    </p>
                </div>
                <div>
                     <h4 className="font-semibold text-white mb-2">KEY PERSONNEL</h4>
                     <div className="space-y-2 text-[#cbd5e1]">
                        <p>Principal Officer: Jyoti Prakash Nayak<br/>Email: jyoti.prakash@wealthzi.com</p>
                        <p>Compliance Officer: Harakh Singh<br/>Email: harakh.singh@wealthzi.com</p>
                        <p>Grievance Officer: Sanjeev Johari<br/>Email: sanjeev.johari@wealthzi.com</p>
                     </div>
                </div>
                 <div>
                    <h4 className="font-semibold text-white mb-2">SEBI REGIONAL OFFICE</h4>
                    <p className="text-[#cbd5e1]">
                       Securities and Exchange Board of India,<br/>
                       NBCC Complex, Office Tower-1, 8th Floor, Plate B,<br/>
                       East Kidwai Nagar, New Delhi - 110023<br/>
                       Phone: 011-69012988<br/>
                       Email: sdshmr@sebi.gov.in
                    </p>
                </div>
            </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 lg:mt-16 border-t border-white/20 pt-8 text-xs text-[#cbd5e1]">
            <h3 className="font-heading font-semibold text-base text-white mb-4">DISCLAIMERS</h3>
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
