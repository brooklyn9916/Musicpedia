import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card } from 'react-native-paper';

export default function Quiz() {
  const navigation = useNavigation();
  const route = useRoute();
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [disableAnswers, setDisableAnswers] = useState(false);

  useEffect(() => {
    // Get quiz data from API
    axios
      .get(`http://localhost:5000/api/quizzes/category/${route.params.id}`, {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setQuizData(response.data))
      .catch((error) => console.error(error));
  }, []);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/histories/${route.params.id}`, {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setDetailData(response.data))
      .catch((error) => console.error(error));
  }, []);
  const handleAnswer = async (selectedOption) => {
    setDisableAnswers(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/jobsheets/submitOne',
        {
          quizId: quizData[questionIndex].id,
          answer: selectedOption,
        }
      );

      if (response.data.message === 'Jawabanmu benar, selamat!') {
        setRight(true);
        setScore(score + 1);
      } else {
        setWrong(true);
      }
    } catch (error) {
      console.error(error);
    }

    // Wait for 2 seconds before showing next question
    setTimeout(() => {
      setRight(false);
      setWrong(false);
      setQuestionIndex(questionIndex + 1);
      setDisableAnswers(false);
    }, 2000);
  };

  const renderQuiz = () => {
    const currentQuestion = quizData[questionIndex];

    if (questionIndex === quizData.length) {
      return renderScore();
    }

    return (
      <>
        <Title>{currentQuestion.quiz}</Title>
        {right && <TitleRight>Jawabanmu Benar, Selamat!</TitleRight>}
        {wrong && <TitleWrong>Jawabanmu Salah!</TitleWrong>}
        <View>
          {currentQuestion.options.map((option) => (
            <Button
              key={option}
              disabled={disableAnswers}
              onPress={() => handleAnswer(option[0])}>
              <ButtonText>{option}</ButtonText>
            </Button>
          ))}
        </View>
        {questionIndex === quizData.length && renderScore()}
      </>
    );
  };

  const resetQuiz = () => {
    setQuizData(null);
    setScore(0);
    setRight(false);
    setWrong(false);
    setQuestionIndex(0);
    setDisableAnswers(false);

    axios
      .get(`http://localhost:5000/api/quizzes/category/${route.params.id}`, {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setQuizData(response.data))
      .catch((error) => console.error(error));
  };

  const renderScore = () => (
    <>
      <View style={{ backgroundColor: '#2B94C1' }}>
        <Card
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: 331,
            height: 625,
            backgroundColor: '#2B94C1',
          }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Card
                style={{
                  borderRadius: 20,
                  width: 300,
                  height: 100,
                  marginTop: 30,
                  alignItems: 'center',
                  backgroundColor: 'white',

                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                }}>
                <View style={styles.paragraph3}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: 'bold',
                      fontFamily: 'poppins',
                      textalign: 'center',
                      textAlignVertical: 'center',
                    }}>
                    Quiz alat musik <Text>{detailData.title}</Text>
                  </Text>
                </View>
                <View style={styles.paragraph3}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontFamily: 'poppins',
                    }}>
                    Alat musik tradisional Indonesia
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Card
                style={{
                  borderRadius: 30,
                  width: 300,

                  alignItems: 'center',
                  backgroundColor: 'white',

                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                }}>
                <Image
                  source={require('../assets/nilai.png')}
                  style={{
                    width: 121,
                    height: 90,
                    position: 'center',
                    marginLeft: 90,
                  }}
                />
                <Summary style={{ fontSize: 12, marginLeft: 30 }}>
                  <Text style={{ textalign: 'center' }}>
                    Kamu Berhasil Menjawab {score} dari {quizData.length} soal
                  </Text>
                </Summary>
              </Card>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 170,
              flex: 1,
            }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Card
                  style={{
                    borderRadius: 20,
                    width: 140,
                    height: 70,
                    marginTop: 30,
                    alignItems: 'center',
                    backgroundColor: '#27AE60',

                    justifyContent: 'center',
                    flexDirection: 'row',
                    shadowColor: 'black',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}>
                  <View style={styles.paragraph3}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontcolor: 'grey',
                        fontWeight: 'bold',
                        fontFamily: 'poppins',
                        textalign: 'center',
                        textAlignVertical: 'center',
                      }}>
                      {score}
                    </Text>
                  </View>
                  <View style={styles.paragraph3}>
                    <View style={{ fontcolor: 'white' }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontcolor: 'White',
                          marginRight: 30,
                          fontFamily: 'poppins',
                        }}>
                        Jawaban Benar
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Card
                  style={{
                    borderRadius: 20,
                    width: 140,
                    height: 70,
                    marginTop: 30,
                    alignItems: 'center',
                    backgroundColor: '#EB5757',

                    justifyContent: 'center',
                    flexDirection: 'row',
                    shadowColor: 'black',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}>
                  <View style={styles.paragraph3}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontcolor: 'White',
                        fontWeight: 'bold',
                        fontFamily: 'poppins',
                        textalign: 'center',
                        textAlignVertical: 'center',
                      }}>
                      {quizData.length - score}
                    </Text>
                  </View>
                  <View style={styles.paragraph3}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontcolor: 'White',
                        marginRight: 30,
                        fontFamily: 'poppins',
                      }}>
                      Jawaban Benar
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>







            
          </View>
          
        </Card>
      </View>
    </>
  );

  return (
    <Container>
      <View>
        <View style={styles.paragraph}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            QUIZ
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image
              source={require('../assets/Home.png')}
              style={{ marginLeft: 180 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.paragraph2}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            Quiz alat musik <Text>{detailData.title}</Text>
          </Text>
        </View>
        <View style={styles.paragraph3}>
          <Text style={{ fontSize: 12, color: 'white' }}>
            Alat musik tradisional Indonesia
          </Text>
        </View>

        <View>
          <Card style={styles.containerCard}>
            <ScrollView style={styles.box}>
              {quizData ? (
                <>{renderQuiz()}</>
              ) : (
                <ActivityIndicator size="large" color="#A52A2A" />
              )}
            </ScrollView>
          </Card>
        </View>
      </View>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  background-color: #2B94C1;
  color: green;
  flex: 1;
  
  
`;

const Title = styled.Text`
  color: black;
  font-family: poppins;
  font-size: 20px;
  margin-bottom: 3px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
`;

const TitleRight = styled(Title)`
  color: green;
`;

const TitleWrong = styled(Title)`
  color: red;
`;

const Summary = styled(Title)`
  
  font-size: 16px;
  padding-bottom: 2px;
`;

const Button = styled.TouchableOpacity`
  
  borderWidth: 3;
  borderColor: #1CC2E8;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px 20px;
`;

const ButtonText = styled.Text`
  color: #1f2e1f;
  font-size: 18;
  fontFamily: poppins;
  fontWeight: bold;
`;
const styles = StyleSheet.create({
  paragraph: {
    margin: '50px 0px 0px 30px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph2: {
    margin: '20px 0px 0px 30px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  paragraph3: {
    margin: '0px 0px 0px 30px',

    fontSize: 12,
  },
  box: {
    width: '100%',
    height: 500,

    alignItems: 'center',
  },
  containerCard: {
    width: 331,
    height: 625,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
