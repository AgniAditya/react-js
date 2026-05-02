import React from 'react'
import UserCard from './components/UserCard'
import './App.css'

function App() {

  const jobs = [
    {
      img: "https://imgs.search.brave.com/seiMig0aND-rc8Dy7OGiRJjZPFp8swDPN5NevDXm6aA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/MTM2LzMyMi9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi1mcmVlLWZyZWUt/dmVjdG9yLmpwZw",
      company: "amazon",
      dateposted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part Time",
      experience: "Senior Level",
      rate: "$120/hr",
      location: "Mumbai, India"
    },
    {
      img: "https://imgs.search.brave.com/j5FNhYRZkpcRlamgbXdPpPszJOrLUKGtgQMdE1q-Grg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwOS9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw",
      company: "google",
      dateposted: "7 days ago",
      role: "Frontend Developer",
      type: "Full Time",
      experience: "Mid Level",
      rate: "$95/hr",
      location: "Bangalore, India"
    },
    {
      img: "https://imgs.search.brave.com/yO-xA30KmVaFy7eova4nfK3sF66b9ZxYU1UTMuHWFOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE1L01pY3Jvc29m/dF8tX1N1cGVyVGlu/eUljb25zLnN2Zw",
      company: "microsoft",
      dateposted: "2 days ago",
      role: "Product Manager",
      type: "Full Time",
      experience: "Senior Level",
      rate: "$110/hr",
      location: "Hyderabad, India"
    },
    {
      img: "https://imgs.search.brave.com/ogW95Zn0DbWrqclckNy48frZk_TcsOvBRB-OUGBULnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2ZsaXBr/YXJ0LmpwZw",
      company: "flipkart",
      dateposted: "9 days ago",
      role: "Backend Engineer",
      type: "Contract",
      experience: "Mid Level",
      rate: "$85/hr",
      location: "Delhi, India"
    },
    {
      img: "https://imgs.search.brave.com/Nc9hjzCaHDPm_M37p7SpOznU2-dSr1ONVaWtW26gSmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdHRkZC50/c2RzaS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC90/Y3MtbG9nby1KUEct/ZmlsZS5qcGc_Zml0/PTMwMCwzMDAmc3Ns/PTE",
      company: "tcs",
      dateposted: "5 days ago",
      role: "Software Tester",
      type: "Part Time",
      experience: "Entry Level",
      rate: "$40/hr",
      location: "Pune, India"
    },
    {
      img: "https://imgs.search.brave.com/3VASfKzWEhXJ8IstlM2-RtbbTBpmj70uxWWf1WRvO3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvaS80/Mi9pbmZvc3lzLnN2/Zw",
      company: "infosys",
      dateposted: "6 days ago",
      role: "Full Stack Developer",
      type: "Full Time",
      experience: "Mid Level",
      rate: "$90/hr",
      location: "Chennai, India"
    },
    {
      img: "https://imgs.search.brave.com/HN0xNy8Z9ksIICx61tWAJfEt-LED1UlYBsMZR0uFkAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA1/L1dpcHJvLWxvZ28t/NTAweDM1OC5qcGc",
      company: "wipro",
      dateposted: "1 days ago",
      role: "Data Analyst",
      type: "Contract",
      experience: "Entry Level",
      rate: "$60/hr",
      location: "Noida, India"
    },
    {
      img: "https://imgs.search.brave.com/TFSkvrIDoOe0y0SJY2E8ciXA6R7PaZUMLsHcAH-UW3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Rfem9o/by1uZXc5MjgyLmxv/Z293aWsuY29tLndl/YnA",
      company: "zoho",
      dateposted: "10 days ago",
      role: "UI Designer",
      type: "Full Time",
      experience: "Mid Level",
      rate: "$80/hr",
      location: "Chennai, India"
    },
    {
      img: "https://imgs.search.brave.com/OCaDv7xCPKIvplwgXROjgrukXiNOCPGr-ETAWzhMHJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9QYXl0bS9Q/YXl0bS1Mb2dvLndp/bmUuc3Zn",
      company: "paytm",
      dateposted: "3 days ago",
      role: "DevOps Engineer",
      type: "Full Time",
      experience: "Senior Level",
      rate: "$115/hr",
      location: "Noida, India"
    },
    {
      img: "https://imgs.search.brave.com/8h9IckpZx2_47vp5m-RDBZqRhR0GcgbPgwtteNHKMbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvb2xhLWxv/Z28tcG5nX3NlZWts/b2dvLTMwNjUyNS5w/bmc",
      company: "ola",
      dateposted: "2 days ago",
      role: "Mobile App Developer",
      type: "Part Time",
      experience: "Mid Level",
      rate: "$85/hr",
      location: "Bangalore, India"
    }
  ]

  return (
    <main>
      <div className='parent'>
        <div className='jobs'>
          {jobs.map((job,index) => {
            return <UserCard 
            key = {index}
            img = {job.img}
            company = {job.company}
            dateposted = {job.dateposted}
            role = {job.role}
            type = {job.type}
            experience = {job.experience}
            rate = {job.rate}
            location = {job.location}
            />
          })}
        </div>
      </div>
    </main>
  )
}

export default App