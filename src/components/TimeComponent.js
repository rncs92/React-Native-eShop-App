import React from "react";
import { Text, StyleSheet } from "react-native";
import { format, utcToZonedTime } from "date-fns-tz";
import { addDays } from "date-fns";

const TimeComponent = ({ deliveryDays }) => {
  const eetNow = utcToZonedTime(new Date(), "Europe/Riga");

  const deliveryDate = addDays(eetNow, deliveryDays);

  const formattedDeliveryDate = format(deliveryDate, "EEEE, MMMM d, yyyy", {
    timeZone: "Europe/Riga",
  });

  return (
    <Text style={styles.header}>
      Delivery date:{" "}
      <Text style={{ fontWeight: "600" }}>{formattedDeliveryDate}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    marginBottom: 7,
  },
});

export default TimeComponent;
