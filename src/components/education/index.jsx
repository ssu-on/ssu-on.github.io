import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ time, degree, institution, major }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-1 font-normal">{institution}</div>
    <div className="mb-4 font-normal">{major}</div> {/* 추가된 부분 */}
  </li>
);

const Education = ({ loading, education }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          degree={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ width: 'w-6/12', height: 'h-3' })}
          major={skeleton({ width: 'w-4/12', height: 'h-3' })} {/* 추가된 부분 */}
        />
      );
    }

    return array;
  };

  return (
    <>
      {education?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Education
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {education.map((item, index) => (
                      <ListItem
                        key={index}
                        time={`${item.from} - ${item.to}`}
                        degree={item.degree}
                        institution={item.institution}
                        major={item.major} {/* 추가된 부분 */}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Education.propTypes = {
  loading: PropTypes.bool.isRequired,
  education: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  time: PropTypes.node,
  degree: PropTypes.node,
  major: PropTypes.node,
  institution: PropTypes.node,
};

export default Education;
