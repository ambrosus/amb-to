const getEvent = (events: any, eventId: string) => {
  let eventState;
  events.map((e: any) => {
    if (e.eventId === eventId) {
      eventState = e;
    }
  });
  return eventState;
};

export default getEvent;
