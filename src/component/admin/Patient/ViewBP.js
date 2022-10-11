import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../../../header/Header";
import Sidebarr from "../../../sidebar/Sidebar";
import Tool from "../../../sidebar/Tool";
import Footer from "../../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { GetPatientBPDetailsAction} from "../../../action"

export default function ViewBP() {
  const { patientId } = useParams();
  const {
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);
  const obj = {};
  const [inputField, setInputField] = useState(obj);

  const inputsHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
  };
  
  const token = useSelector((state) => state?.auth?.token);
  const patientData = useSelector((state) => state?.category?.patient);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [diseases, setDiseases] = useState("");
  const [otherDiseases, setOtherDiseases] = useState("");
  const [medications, setMedications] = useState("");
  const [allergies, setAllergies] = useState("");
  const otherDisease = [];
  const medicineArray = [];
  const allergyArray = [];
  if (otherDiseases && otherDiseases.length > 0) {
    otherDiseases.split(/\s*,\s*/).forEach(function (otherDis) {
      otherDisease.push(otherDis);
    });
  }

  if (medications && medications.length > 0) {
    medications.split(/\s*,\s*/).forEach(function (medication) {
      medicineArray.push(medication);
    });
  }

  if (allergies && allergies.length > 0) {
    allergies.split(/\s*,\s*/).forEach(function (allergy) {
      allergyArray.push(allergy);
    });
  }

  useEffect(async()=>{
    await dispatch(GetPatientBPDetailsAction(patientId,token))
  },[])

  useEffect(() => {
    setEditorLoaded(true);
    const data = patientData.find((obj) => {
      return obj._id === patientId;
    });

    setDiseases(data?.diseases);
    setOtherDiseases(data?.otherDiseases);
    setMedications(data?.medication);
    setAllergies(data?.allergies);
  }, []);

  return (
    <div className="sidebar-mini skin-gr0een-light">
      <div>
        <Toaster />
      </div>
      <div className="wrapper">
        <Header />
        <Sidebarr />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>View Patient Diseases</h1>
            <ol className="breadcrumb">
              <li>
                <a href="/home">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li>
                <a href="/patients">Manage patient</a>
              </li>
              <li className="active">View patient diseases</li>
            </ol>
          </section>
          <section className="content">
            <div className="box">
              <div className="box-header with-border">
                <div className="box-tools pull-right">
                  <Link
                    to="/patients"
                    type="button"
                    className="btn btn-success"
                    data-toggle="tooltip"
                    title="Back"
                  >
                    {"Go Back"}
                  </Link>
                </div>
              </div>

              <div className="box-body">
                <section className="content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="nav-tabs-custom">
                        <div className="tab-content">
                          <div className="active tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group">
                                <label
                                  htmlFor="disease"
                                  className="col-sm-2 control-label"
                                >
                                  Diseases
                                </label>
                                {(() => {
                                  if (
                                    diseases?.length > 0 &&
                                    otherDisease?.length > 0
                                  ) {
                                    return (
                                      <div className="col-sm-5">
                                        {diseases?.length > 0 &&
                                          diseases?.map((object) => (
                                            <input
                                              type="text"
                                              style={{ marginBottom: "2%" }}
                                              className="form-control viewDetail"
                                              id="disease"
                                              placeholder=""
                                              name="disease"
                                              value={object?.name}
                                              readOnly
                                            />
                                          ))}
                                        {otherDisease?.length > 0 &&
                                          otherDisease?.map((object) => (
                                            <input
                                              type="text"
                                              style={{ marginBottom: "2%" }}
                                              className="form-control viewDetail"
                                              id="otherDisease"
                                              placeholder=""
                                              name="otherDisease"
                                              value={object}
                                              readOnly
                                            />
                                          ))}
                                      </div>
                                    );
                                  } else {
                                    return (
                                      <div className="col-sm-5" style={{'marginTop':'6px', 'marginLeft':'50px'}}>
                                        No data available to show.
                                      </div>
                                    );
                                  }
                                })()}
                              </div>

                              <div className="form-group">
                                <label
                                  htmlFor="medication"
                                  className="col-sm-2 control-label"
                                >
                                  Medications
                                </label>
                                {(() => {
                                  if (medicineArray?.length > 0) {
                                    return (
                                      <div className="col-sm-5">
                                        {medicineArray?.length > 0 &&
                                          medicineArray?.map((object) => (
                                            <input
                                              type="text"
                                              style={{ marginBottom: "2%" }}
                                              className="form-control viewDetail"
                                              id="medication"
                                              placeholder=""
                                              name="medication"
                                              value={object}
                                              readOnly
                                            />
                                          ))}
                                      </div>
                                    );
                                  } else {
                                    return (
                                      <div className="col-sm-5" style={{'marginTop':'6px', 'marginLeft':'50px'}}>
                                        No data available to show.
                                      </div>
                                    );
                                  }
                                })()}
                              </div>

                              <div className="form-group">
                                <label
                                  htmlFor="allergy"
                                  className="col-sm-2 control-label"
                                >
                                  Allergies
                                </label>
                                {(() => {
                                  if (allergyArray?.length > 0) {
                                    return (
                                      <div className="col-sm-5">
                                        {allergyArray?.length > 0 &&
                                          allergyArray?.map((object) => (
                                            <input
                                              type="text"
                                              style={{ marginBottom: "2%" }}
                                              className="form-control viewDetail"
                                              id="allergy"
                                              placeholder=""
                                              name="allergy"
                                              value={object}
                                              readOnly
                                            />
                                          ))}
                                      </div>
                                    );
                                  } else {
                                    return (
                                      <div className="col-sm-5" style={{'marginTop':'6px', 'marginLeft':'50px'}}>
                                        No data available to show.
                                      </div>
                                    );
                                  }
                                })()}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <Tool />

        <div className="control-sidebar-bg" />
      </div>
    </div>
  );
}
