import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Attendance = ({ navigation }) => {
    const rollNumbers = [
        "21BD1A0501", "21BD1A0502", "21BD1A0503", "21BD1A0504", "21BD1A0505", "21BD1A0506", "21BD1A0507", "21BD1A0509", "21BD1A050A", "21BD1A050B", "21BD1A050D", "21BD1A050F", "21BD1A050G",
        "21BD1A050J", "21BD1A050K", "21BD1A050L", "21BD1A050M", "21BD1A050P", "21BD1A050R", "21BD1A050T", "21BD1A050U", "21BD1A050V", "21BD1A050W", "21BD1A050Y", "21BD1A050Z", "21BD1A0511",
        "21BD1A0512", "21BD1A0513", "21BD1A0514", "21BD1A0515", "21BD1A0516", "21BD1A0517", "21BD1A0518", "21BD1A0519", "21BD1A051A", "21BD1A051C", "21BD1A051D", "21BD1A051E", "21BD1A051G",
        "21BD1A051H", "21BD1A051J", "21BD1A051K", "21BD1A051L", "21BD1A051P", "21BD1A051Q", "21BD1A051R", "21BD1A051T", "21BD1A051Z", "21BD1A05K1", "21BD1A05K2", "22BD5A0502", "22BD5A0506"
    ];

    const [attendanceList, setAttendanceList] = useState(
        rollNumbers.map((roll) => ({
            rollNumber: roll,
            present: false,
            lateralEntry: roll.startsWith("22BD"),
        }))
    );

    const toggleAttendance = (index) => {
        const updatedAttendance = [...attendanceList];
        updatedAttendance[index].present = !updatedAttendance[index].present;
        setAttendanceList(updatedAttendance);
    };

    const markAll = (flag) => {
        const updatedAttendance = attendanceList.map((student) => ({
            ...student,
            present: flag,
        }));
        setAttendanceList(updatedAttendance);
    };

    const handleSubmit = () => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to Submit?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Submit',
                    onPress: () => {
                        console.log('Attendance submitted!');
                        navigation.navigate('Attendance Preview', {attendanceList})
                    },
                    style: 'default',
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>CSE A</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={1}  delayPressIn={0} onPress={()=>markAll(true)}>
                        <Text style={{...styles.button, backgroundColor: '#008800'}}>Mark All Present</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}  delayPressIn={0} onPress={()=>markAll(false)}>
                        <Text style={{...styles.button, backgroundColor: '#dd0000'}}>Mark All Absent</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.attendanceList}>
                    {attendanceList.map((student, index) => (
                        <TouchableOpacity activeOpacity={1}  delayPressIn={0}
                            key={index}
                            style={[
                                styles.rollNumber,
                                { backgroundColor: student.present ? '#00dd00' : '#ff3300' },
                                student.lateralEntry && { backgroundColor: student.present ? '#00ff33' : '#ffcc00' },
                            ]}
                            onPress={() => toggleAttendance(index)}
                        >
                            <Text style={styles.rollNumberText}>{student.rollNumber.slice(-3)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={1}  delayPressIn={0} onPress={handleSubmit}>
                        <Text style={{...styles.button, backgroundColor: 'green'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold',
    },
    attendanceList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    rollNumber: {
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    rollNumberText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        width: '100%',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Attendance;
