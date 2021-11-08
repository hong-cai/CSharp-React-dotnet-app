import React from 'react'
import { Activity } from './Activity'
import {List} from 'semantic-ui-react';

interface Props{
	activity:Activity;
}

export default function ActivityItem({activity}:Props) {
	return (
		<List.Item key={activity.id}>
								<p>{activity.title}</p>
								<p>{activity.date}</p>
								<p>{activity.description}</p>
								<p>{activity.category}</p>
								<p>{activity.city}</p>
								<p>{activity.venue}</p>
							</List.Item>
			)
}
