import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import BackIcon from '../../assets/Event/Back.svg';
import styles from './EventStyle'; // Assuming you have a styles file for your component

const EventCard = ({ date, title, participants, location, onPress }) => {
  return (
    <TouchableOpacity style={styles.eventCard} onPress={onPress}>
      <View style={styles.eventContent}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateDay}>10</Text>
          <Text style={styles.dateMonth}>JUNE</Text>
        </View>
        
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle} numberOfLines={1}>{title}</Text>
          
          <View style={styles.participantsContainer}>
            <View style={styles.avatarGroup}>
              <Image source={require('../../assets/Event/image1.png')} style={styles.avatar} />
              <Image source={require('../../assets/Event/image2.png')} style={[styles.avatar, styles.avatarOverlap]} />
            </View> 
            <Text style={styles.participantsText}>{participants}</Text>
          </View>
          
          <View style={styles.locationContainer}>
       
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity style={styles.favoriteButton}>
       
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const EventSection = ({ title, events }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.eventsGrid}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            title={event.title}
            participants={event.participants}
            location={event.location}
            onPress={() => console.log(`Pressed event: ${event.title}`)}
          />
        ))}
      </View>
    </View>
  );
};

const Event = ({ navigation }) => {
  // Sample data
  const interSchoolEvents = [
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    },
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    }
  ];
  
  const inSchoolEvents = [
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    },
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    }
  ];
  
  const beyondCampusEvents = [
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    },
    {
      date: { day: 10, month: 'JUNE' },
      title: 'International Band Music...',
      participants: '20+ participants',
      location: '36 Guild Street London, UK'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon
            width={24}
            height={24}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Events</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <EventSection title="Inter-school events" events={interSchoolEvents} />
        <EventSection title="In-School events" events={inSchoolEvents} />
        <EventSection title="Beyond campus events" events={beyondCampusEvents} />
      </ScrollView>
      
      <TouchableOpacity style={styles.floatingButton} >
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
</SafeAreaView>
    );
};
export default Event;