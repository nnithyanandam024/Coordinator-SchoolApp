import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
      },
      headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
      },
      scrollView: {
        flex: 1,
        padding: 16,
      },
      sectionContainer: {
        marginBottom: 24,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#111827',
      },
      eventsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      eventCard: {
        width: '48%',
        backgroundColor: '#FEE2E2',
        borderRadius: 12,
        marginBottom: 16,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      eventContent: {
        flex: 1,
      },
      dateContainer: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
      },
      dateDay: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
      },
      dateMonth: {
        fontSize: 10,
        color: '#6B7280',
      },
      eventInfo: {
        flex: 1,
      },
      eventTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
      },
      participantsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
      },
      avatarGroup: {
        flexDirection: 'row',
        marginRight: 4,
      },
      avatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
      },
      avatarOverlap: {
        marginLeft: -8,
      },
      participantsText: {
        fontSize: 12,
        color: '#4B5563',
        marginLeft: 4,
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      locationText: {
        fontSize: 12,
        color: '#6B7280',
        marginLeft: 4,
      },
      favoriteButton: {
        padding: 4,
      },
      floatingButton: {
        position: 'absolute',
    right: 25,
    bottom: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3557FF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
      },
      plusIcon: {
        fontSize: 32,
        color: '#FFFFFF',
        lineHeight: 50,
      },
      BackIcon: {
        width: 24,
        height: 24,
      },
    });

export default styles;
      