import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export default function DashboardCard() {

  const patientData = useSelector(state=>state?.category?.patient);
  const vitalData = useSelector(state=>state?.vital?.data);
  const diseaseData = useSelector(state=>state?.disease?.data?.data);
  const medicineData = useSelector(state=>state?.medicine?.data?.data);

  const dispatch = useDispatch();

	return (
		<div>
		    <section className="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-xs-6">
          {/* small box */}
          <div className="small-box" style={{backgroundColor: '#73cadf',color: 'white'}}>
            <div className="inner">
              <h3>{patientData?.length}</h3>
              <p>Total Patients</p>
            </div>
            <div className="icon">
              <i className="ion-android-people" />
            </div>
            
            <Link to="/patients" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </Link>

          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/* small box */}
          <div className="small-box" style={{backgroundColor: '#48e19b',color: 'white'}}>
            <div className="inner">
              <h3>0</h3>
              <p>Total Prescriptions</p>
            </div>
            <div className="icon">
              <i className="ion-ios-pulse-strong" />
            </div>
            
            <Link to="/home" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </Link>

          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/* small box */}
          <div className="small-box" style={{backgroundColor: '#9b96e7',color: 'white'}}>
            <div className="inner">
              <h3>{diseaseData?.length}</h3>
              <p>Total Diseases</p>
            </div>
            <div className="icon">
              <i className="fa fa-stethoscope" />
            </div>
            
            <Link to="/diseases" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </Link>

          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/* small box */}
          <div className="small-box" style={{backgroundColor: '#d2e375',color: 'white'}}>
            <div className="inner">
              <h3>{medicineData?.length}</h3>
              <p>Total Medicines</p>
            </div>
            <div className="icon">
              <i className="fa fa-medkit" />
            </div>
            
            <Link to="/medicines" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </Link>

          </div>
        </div>
        {/* <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-red">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div> */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">

          {/* TO DO List */}
          <div className="box box-primary">
            <div className="box-header">
              <i className="ion ion-clipboard" />
              <h3 className="box-title">To Do List</h3>
              <div className="box-tools pull-right">
                <ul className="pagination pagination-sm inline">
                  <li>
                    <a href="#">«</a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">»</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              {/* See dist/js/pages/dashboard.js to activate the todoList plugin */}
              <ul className="todo-list">
                <li>
                  {/* drag handle */}
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <input type="checkbox" defaultValue="" />
                  {/* todo text */}
                  <span className="text">Design a nice theme</span>
                  {/* Emphasis label */}
                  <small className="label label-danger">
                    <i className="fa fa-clock-o" /> 2 mins
                  </small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  <input type="checkbox" defaultValue="" />
                  <span className="text">Make the theme responsive</span>
                  <small className="label label-info">
                    <i className="fa fa-clock-o" /> 4 hours
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  <input type="checkbox" defaultValue="" />
                  <span className="text">Let theme shine like a star</span>
                  <small className="label label-warning">
                    <i className="fa fa-clock-o" /> 1 day
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  <input type="checkbox" defaultValue="" />
                  <span className="text">Let theme shine like a star</span>
                  <small className="label label-success">
                    <i className="fa fa-clock-o" /> 3 days
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  <input type="checkbox" defaultValue="" />
                  <span className="text">
                    Check your messages and notifications
                  </span>
                  <small className="label label-primary">
                    <i className="fa fa-clock-o" /> 1 week
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fa fa-ellipsis-v" />
                    <i className="fa fa-ellipsis-v" />
                  </span>
                  <input type="checkbox" defaultValue="" />
                  <span className="text">Let theme shine like a star</span>
                  <small className="label label-default">
                    <i className="fa fa-clock-o" /> 1 month
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
              </ul>
            </div>
            {/* /.box-body */}
            <div className="box-footer clearfix no-border">
              <button type="button" className="btn btn-default pull-right">
                <i className="fa fa-plus" /> Add item
              </button>
            </div>
          </div>
          {/* /.box */}
          {/* quick email widget */}

        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">
          {/* Calendar */}
          
          {/* /.box */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </section>	
		</div>
	)
}