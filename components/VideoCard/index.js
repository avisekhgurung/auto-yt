import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoCards({
  videoTitle,
  prompt,
  thumbnailUrl,
  videoUrl,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [VideoDialogopen, VideoDialogsetOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const VideoDialoghandleOpen = () => {
    VideoDialogsetOpen(true);
  };

  const VideoDialoghandleClose = () => {
    VideoDialogsetOpen(false);
  };

  const handleOpenStripe = () => {
    window.open('https://buy.stripe.com/8wMg1n04F4MHbC09AC')
  }

  return (
    <Card
      sx={{
        maxWidth: 325,
        marginRight: "25px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <CardHeader />
      <CardMedia
        component="img"
        height="300"
        image={
          thumbnailUrl && thumbnailUrl.trim() !== ""
            ? thumbnailUrl
            : "/cat.jpeg"
        }
        alt="Paella dish"
        sx={{
          p: 2,
          borderRadius: "25px",
        }}
        onClick={VideoDialoghandleOpen} // <-- Add this line
      />
      <Dialog
        open={VideoDialogopen}
        onClose={VideoDialoghandleClose}
        maxWidth="md" // Adjust based on your video size preference
        fullWidth={true}
      >
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Dialog>

      <CardContent>
        <Stack direction="column" spacing={1} sx={{ pb: 3 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontStyle: "Lato",
              fontSize: "16px",
              fontWeight: "700", // Adjust this value for desired thickness
            }}
          >
            {/* Kitty Reel */}
            {videoTitle}
          </Typography>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: "inline",
                color: "grey",
                fontStyle: "Ralway",
                fontSize: "16px",
                fontWeight: "400", // Adjust this value for desired thickness
              }}
            >
              Social Media :
            </Typography>
            <IconButton sx={{ mx: "3px", p: 0 }}
              onClick={handleOpenStripe}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/facebook.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}  onClick={handleOpenStripe}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/instagram.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}  onClick={handleOpenStripe}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/tiktok.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
            <IconButton sx={{ mx: "3px", p: 0 }}  onClick={handleOpenStripe}>
              <Avatar
                alt="Remy Sharp"
                src="/static/icons/youtube.png"
                sx={{ width: 20, height: 20 }} // Adjust the width and height values for desired size
              />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              my: 1,
              display: "inline",
              color: "grey",
              fontStyle: "Ralway",
              fontSize: "16px",
              fontWeight: "400", // Adjust this value for desired thickness
            }}
          >
            {/* Prompt : Create a insta reel of a kitty cat */}
            Prompt: {prompt}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 1 }}>
          <Button
            variant="outlined"
            onClick={handleOpenStripe}
            sx={{
              mx: 1,
              color: "#7B68EE",
              borderColor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "12px",
              fontWeight: 'bold',
              padding: "5px 64px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              "&:hover": {
                borderColor: "#7B68EE",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={handleOpenStripe}
            sx={{
              mx: 1,
              bgcolor: "#7B68EE !important",
              fontStyle: "Raleway",
              fontSize: "12px",
              padding: "5px 64px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px",
              fontWeight: 'bold', // Fully rounded edges
              "&:hover": {
                bgcolor: "#7B68EE",
              },
              
            }}
          >
            Post
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
