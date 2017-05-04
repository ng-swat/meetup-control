export class Meetup {
  meetupId: number;
  title: string;
  subtitle: string;
  description: string;
  startDate: Date;
  endDate: Date;
  participants?: MeetupParticipants[];
}

export class MeetupParticipants {
  participantId: number;
  name: string;
  gender?: boolean;
}
