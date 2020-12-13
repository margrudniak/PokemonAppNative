import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import CardList from "./CardList";
import LoadMore from "./LoadMore";

const Card = () => {
  const [data, setData] = useState([]);
  const [holdData, setHoldData] = useState([]);
  const [pageUrl, setPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"
  );
  const [loadMore, setLoadMore] = useState();

  useEffect(() => {
    fetch(pageUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setLoadMore(json.next);
        concatData();
      })
      .catch((error) => console.error(error));
  }, [pageUrl]);

  const concatData = () => {
    setHoldData((holdData) => [...holdData, ...data]);
  };

  const getNextValues = () => {
    setPageUrl(loadMore);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 155 }}>
        <View style={styles.cards}>
          {holdData.length ? (
            holdData.map((item) => (
              <CardList key={item.name} name={item.name} url={item.url} />
            ))
          ) : (
            <Text>Click the button below to load data</Text>
          )}
        </View>
        <View>
          <LoadMore getNextValues={loadMore ? getNextValues : null} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 30,
    paddingTop: 30,
  },
});

export default Card;
