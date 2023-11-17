import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Clipboard, ToastAndroid } from 'react-native';

const AttendancePreview = ({ route }) => {
    const { attendanceList } = route.params;

    const presentStudents = attendanceList.filter(student => student.present);
    const absentStudents = attendanceList.filter(student => !student.present);

    const copyToClipboard = () => {
        const lateralEntries = attendanceList.filter(student => student.lateralEntry && student.present);
        const regularEntries = attendanceList.filter(student => !student.lateralEntry && student.present);

        let textToCopy = 'CSE A Attendance:\n\n';

        if (regularEntries.length > 0) {
            textToCopy += 'Regular Students Present:\n';
            textToCopy += regularEntries.map(student => student.rollNumber.slice(-3)).join('\n');
            textToCopy += '\n\n';
        }

        if (lateralEntries.length > 0) {
            textToCopy += 'Lateral Entries Present:\n';
            textToCopy += lateralEntries.map(student => student.rollNumber.slice(-3)).join('\n');
            textToCopy += '\n\n';
        }

        Clipboard.setString(textToCopy);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Present Students:</Text>
                <View style={styles.listContainer}>
                    <Text style={styles.item}>
                        {presentStudents.map((student, index) => (
                            student.rollNumber.slice(-3) + ', '
                        ))}
                    </Text>
                </View>
                <Text style={styles.title}>Absent Students:</Text>
                <View style={styles.listContainer}>
                    <Text style={styles.item}>
                        {absentStudents.map((student, index) => (
                            student.rollNumber.slice(-3) + ', '
                        ))}
                    </Text>
                </View>
                <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
                    <Text style={styles.copyButtonText}>Copy Presentees</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    listContainer: {
        marginTop: 5,
    },
    item: {
        fontSize: 16,
        marginBottom: 5,
        lineHeight: 26,
    },
    copyButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    copyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AttendancePreview;
