import { api } from "src/services/client-service/api";

export const draftOptions = [
  "Refund",
  "Lead",
  "Balance Payment",
  "App issue & service",
  "Normal",
  "Break",
  "Freezing fees",
  "Mentor",
  "Mentor change",
  "Not well",
  "Refund given",
  "Transfer session",
  "Start later",
  "Program Extensions",
];

export const commonDataAllTable = {
  fetchQuery: () => api.endpoints.getOnHoldDueDate.useLazyQuery(),
  columns: [
    { id: "client_details", label: "client details" },
    { id: "program_details", label: "program details" },
  ],
};

export const noStyleBtnProps = {
  border: "unset",
  bgcolor: "unset",
  color: "unset",
};

export const orderStatusArr = ["Active", "Pause", "Completed", "Advance"];

export const updateScreenToArr = [
  "assessment/1",
  "e-kit",
  "ingredient-checklist-details/1",
  "mentor-intro",
  "message-from-mentor",
  "my-profile",
  "program-details",
  "welcome-letter",
];

export const updateDieStatusToArr = ["Activate Old Diets", "Close Old Diets"];

export const casteOptions = [
  "Arab",
  "Bengali",
  "Bhuddist",
  "Christian",
  "Gujarati",
  "Gujarati Jain",
  "Kutchi",
  "Kutchi Jain",
  "V Maharashtrian",
  "Malyali",
  "Manglorean",
  "Marwadi",
  "Marwadi Jain",
  "Muslim",
  "North East (Please Specify)",
  "Odiya",
  "Parsi",
  "Punjabi",
  "Sikh",
  "Sindhi",
  "Tamilian",
  "Telugu",
  "Tulu",
  "Any Other",
];

export const familyOptions = ["Joint", "Nuclear", "Alone"];

export const bodyShapeOptions = [
  "Oval",
  "Triangle",
  "Square",
  "Apple",
  "Banana",
  "Pears",
  "Hourglass",
];

export const maritalStatusOptions = ["Married", "Single", "Separated"];

export const workStatusOptions = [
  "Working",
  "Not working",
  "Working from home",
];

export const occupationOptions = [
  "Architect",
  "Analyst",
  "Artist",
  "Baker",
  "BPO/IT Services",
  "Chef",
  "Consultant",
  "Doctor",
  "Government Services",
  "Home Maker",
  "Lawyer",
  "Self-Employed",
  "Service",
  "Teacher",
  "Trader",
  "Other Professionals",
];

export const designationOptions = [
  "CXO (CEO, CFO, COO, CMO, CPO)",
  "Executive",
  "Fresher",
  "Middle Management",
  "Self-Employed",
  "Top Management",
  "Any Other",
];

export const jobMealOptions = ["Yes", "No"];
export const travelForJobOptions = ["Yes", "No"];

export const howOftenTravelOptions = [
  "1 to 2 Days",
  "3 to 5 Days",
  "More than 7 Days",
];

export const doYouTravelInCountryOptions = [
  "Within",
  "Country Outside Country",
  "Both",
];

export const dailyActivityLevelOptions = [
  "Sedentary",
  "Lightly Active",
  "Moderately Active",
  "Very Active",
];

export const eatingHabit = [
  "Vegetarian",
  "Non Vegetarian",
  "Ovo-Vegetarian (Vegetarian Eating Eggs)",
  "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
];

export const howOftenEatNonVegOptions = [
  "Daily",
  "Once A Week",
  "Twice A Week",
  "More Than Twice In A Week",
];

export const doYouSmokeOptions = [
  "Never",
  "Quit Since 2 Years",
  "A Few Times A Week",
  "More Than Two Times A Day",
];

export const howOftenConsumeAlcohol = [
  "Never",
  "Quit Since 1 Year",
  "Occasionally",
  "Daily",
];

export const fastOptions = [
  "Once A Week",
  "Twice A Week",
  "Once A Month",
  "Any Other",
];

export const sleepDurationOptions = [
  "Less than 6 hrs (Disturbed)",
  "Less than 6 hrs (Peaceful)",
  "6 to 9 hrs",
  "More than 10 hrs",
];

export const waterIntakePerDayOptions = [
  "Less Than 4 glasses",
  "4-6 glasses",
  "6-12 glasses",
  "More Than 12 glasses",
];

export const howOftenEatFromHotel = [
  "Never",
  "Daily",
  "Once A Week",
  "Twice A Week",
  "More Than Twice A Week",
  "Once Or Twice In A Month",
];

export const cookMealAtHomeOptions = [
  "Yourself Cook",
  "Mother",
  "Spouse",
  "Seldom At home",
  "Any Other",
];

export const doYouExerciseOptions = ["Yes", "No"];

export const cardioFrequencyOptions = [
  ...howOftenEatNonVegOptions,
  "Any Other",
];

export const cardioDurationOptions = [
  "5 Mins",
  "10 Mins",
  "15 Mins",
  "20 Mins",
  "25 Mins",
  "30 Mins",
  "35 Mins",
  "40 Mins",
  "45 Mins",
  "50 Mins",
  "55 Mins",
  "60 Mins",
  "65 Mins",
  "70 Mins",
  "75 Mins",
  "80 Mins",
  "85 Mins",
  "90 Mins",
];

export const weightTrainingOptions = ["Yes", "No"];
export const weightTrainingFrequencyOptions = cardioFrequencyOptions;
export const weightTrainingDurationOptions = cardioDurationOptions;

export const pilatesDurationOptions = cardioDurationOptions;
export const pilateFrequencyOptions = cardioFrequencyOptions;

export const yogaFrequencyOptions = cardioFrequencyOptions;
export const yogaDurationOptions = cardioDurationOptions;

export const otherWorkoutDurationOptions = cardioDurationOptions;
export const otherWorkoutFrequencyOptions = cardioFrequencyOptions;

export const fastingWindowOptions = [];

export const programOptions = [
  "Active",
  "Beat PCOS",
  "Body Transformation",
  "Plateau Breaker",
  "Reform Intermittent",
  "Reneu",
  "Weight Loss-Pro",
  "Weight Loss +",
  "Slim Possible",
  "Slim Smart",
  "Shape Up",
  "Post-Festive Detox Cleanse",
  "Weight Loss Cleanse",
  "Sugar Detox Cleanse",
  "Flat Stomach Cleanse",
  "Acidity Correction Cleanse",
  "Immune Boosting Cleanse Constipation Correction Cleanse",
  "10 Day Weight Loss Diet Plan",
  "10 Day Intermittent Fasting",
  "Transform (weight loss)",
  "14-Day Fitness Challenge",
  "Nourish",
  "Satvaa",
  "Sphoorti",
  "Pregnancy Program",
];
export const specialStackDaysOptions = ["30 day's", "60 day's", "90 day's"];

export const slotsOptions = [
  "09:00 am - 09:20 am",
  "09:30 am - 09:50 am",
  "10:00 am - 10:20 am",
  "10:30 am - 10:50 am",
  "11:00 am - 11:20 am",
  "11:30 am - 11:50 am",
  "12:00 pm - 12:20 pm",
  "12:30 pm - 12:50 pm",
  "01:00 pm - 01:20 pm",
  "01:30 pm - 01:50 pm",
  "02:00 pm - 02:20 pm",
  "02:30 pm - 02:50 pm",
  "03:00 pm - 03:20 pm",
  "03:30 pm - 03:50 pm",
  "04:00 pm - 04:20 pm",
  "04:30 pm - 04:50 pm",
  "05:00 pm - 05:20 pm",
  "05:30 pm - 05:50 pm",
  "06:00 pm - 06:20 pm",
  "06:30 pm - 06:50 pm",
  "07:00 pm - 07:20 pm",
  "07:30 pm - 07:50 pm",
  "08:00 pm - 08:20 pm",
  "08:30 pm - 08:50 pm",
  "09:00 pm - 09:20 pm",
  "09:30 pm - 09:50 pm",
  "10:00 pm - 10:20 pm",
];

export const userTypeOptions = [
  "OCR (Old Client No Program Active)",
  "Old Lead",
  "New Lead",
  "Reference",
  "Other (Please Specify)",
];
