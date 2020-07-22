import React from "react";
//Ui components
import { Item, Label, Button, Modal, Dimmer, Loader } from "semantic-ui-react";
//React-markdown
import ReactMarkdown from "react-markdown";

export const JobCard = ({ jobList, loadingState }) => {
  if (loadingState) {
    return (
      <div>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  }
  //console.log(jobList);
  return (
    <div>
      <h3> {jobList.length} jobs found </h3>
      {jobList.map((job) => {
        return (
          <Item.Group key={job.id}>
            <Item>
              <Item.Image size="tiny" src={job.company_logo} />
              <Item.Content>
                <Item.Header>{job.title}</Item.Header>
                <Item.Extra>
                  <Label
                    icon="building outline"
                    content={job.company}
                    as="a"
                    href={job.company_url}
                  />
                  <Label icon="tag" content={job.type} />
                  <Label icon="globe" content={job.location} />
                </Item.Extra>
                <Item.Description></Item.Description>

                <Item.Extra>
                  <Modal
                    trigger={
                      <Button primary floated="left">
                        Job Description
                      </Button>
                    }
                  >
                    <Modal.Header>Job Description</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <ReactMarkdown
                          source={job.description}
                          escapeHtml={false}
                        />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                  <Modal
                    trigger={
                      <Button primary floated="left">
                        Apply for this job
                      </Button>
                    }
                  >
                    <Modal.Header>How to apply</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <p>
                          If this sounds like you - what are you waiting for??
                        </p>
                        <ReactMarkdown
                          source={job.how_to_apply}
                          escapeHtml={false}
                        />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        );
      })}
    </div>
  );
};
