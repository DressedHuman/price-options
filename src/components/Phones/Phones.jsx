import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        /* fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setPhones(data.data)); */
        
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                return {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1]),
                }
            })
            setPhones(phonesWithFakeData);
        });
    },[])

    return (
        <div>
            <h2 className="text-5xl">Phones : {phones.length}</h2>

            <BarChart width={1200} height={500} data={phones}>
                <XAxis dataKey='name' stroke="green"/>
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;