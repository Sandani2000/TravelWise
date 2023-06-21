import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function RestaurantDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                setPost(res.data.post);
            }
        })
    }, [id]);

    const { Restaurant_Name, Location } = post;

    return (
      <div style={{marginTop:'20px', backgroundColor:'#7ab3b8', padding:'20px'}}>
        <h4 style={{color:'#1A385A', marginBottom:'20px'}}>{Restaurant_Name}</h4>
        <hr style={{borderColor:'#034752'}}/>
    
        <dl className="row" style={{color:'#1A385A'}}>
          <dt className="col-sm-3">Location</dt>
          <dd className="col-sm-9">{Location}</dd>
          <dt className="col-sm-3">Timings</dt>
          <dd className="col-sm-9">{}</dd>
          <dt className="col-sm-3">Cuisine</dt>
          <dd className="col-sm-9">{}</dd>
          <dt className="col-sm-3">Zomato Ratings</dt>
          <dd className="col-sm-9">{}</dd>
          <dt className="col-sm-3">Average Meal For Two (Without Alcohol)</dt>
          <dd className="col-sm-9">{}</dd>
          <dt className="col-sm-3">Contact Number</dt>
          <dd className="col-sm-9">{}</dd>
          <dt className="col-sm-3">Meals</dt>
          <dd className="col-sm-9">{}</dd>
        </dl>
        
      </div>
    );    
}




