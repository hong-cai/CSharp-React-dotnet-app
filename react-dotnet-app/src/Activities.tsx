import React,{useState,useEffect} from 'react'
import ActivityItem from './ActivityItem'
import axios from 'axios';
import { Activity } from './Activity';
import {List} from 'semantic-ui-react';

export default function Activities() {
	const [activities, setActivities]=useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then(response=>{
			console.log(response.data)
			setActivities(response.data);
		})
		return () => {
			console.log("clean up function")
		}
	}, [])

 


	return (
		<List>			{
				activities.map((activity:Activity)=>{
					return (

							<ActivityItem activity={activity}  />
					)
				})
			}
							</List>

	)
}
